'use strict';

const projectResponseWorker = require('../../data/project-response-worker');
const {ProjectServerError} = require('../../errors');

class ProjectUseCase {
  constructor(useCaseName, rules, repository) {
    this._useCaseName = useCaseName;
    this._rules = rules;
    this._repository = repository;
  }

  async runUseCase(workingData) {
    try {
      return await this._tryToRunUseCase(workingData);
    } catch (error) {
      if( error.name !== 'ProjectError' ) {
        console.log(error);
        error = new ProjectServerError(`could not ${this._useCaseName} project`);
      }

      return error.projectResponse;
    }
  }

  async _tryToRunUseCase(workingData) {
    const projectData = workingData.getProjectData();
    await this._checkForComplianceRules(projectData);

    const accessID = workingData.getAccessID();
    const data = await this._updateRepository(accessID, projectData);

    return projectResponseWorker.createSuccessResponse(data);
  }
  async _checkForComplianceRules(projectData) {
    const projectName = projectData.getName();
    await this._rules.check(projectName);
  }
  async _updateRepository(accessID, projectData) {
    return await this._repository.updateRepository(accessID, projectData);
  }
}

module.exports = ProjectUseCase;