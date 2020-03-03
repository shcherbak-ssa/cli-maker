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
      console.log(error);
      if( error.name !== 'ProjectError' )
        error = new ProjectServerError(`could not to ${this._useCaseName} project`);

      return error.projectResponse;
    }
  }

  async _tryToRunUseCase(workingData) {
    const projectData = workingData.getProjectData();
    await this._checkForComplianceRules(projectData);

    const accessID = workingData.getAccessID();
    const data = await this._updateRepostiroy(accessID, projectData);

    return projectResponseWorker.createSuccessResponse(data);
  }
  async _checkForComplianceRules(projectData) {
    const projectName = projectData.getName();
    await this._rules.check(projectName);
  }
  async _updateRepostiroy(accessID, projectData) {
    return await this._repository.updateRepostiroy(accessID, projectData);
  }
}

module.exports = ProjectUseCase;