'use strict';

const projectResponseWorker = require('../data/project-response-worker');
const repositoryWorker = require('./src/repository-worker');
const SelectProjectDataCreator = require('../data/select-project-data');
const {ProjectServerError} = require('../errors');

class SelectProject {
  async handler(workingData) {
    try {
      return await this._tryToRunHandler(workingData);
    } catch (error) {
      if( error.name !== 'ProjectError' ) {
        console.log(error);
        error = new ProjectServerError('could not find project');
      }

      return error.projectResponse;
    }
  }

  async _tryToRunHandler(workingData) {
    const accessID = workingData.getAccessID();
    const selectProjectData = await this._getSelectProjectFromRepository(accessID);
    const data = selectProjectData.getSelectProjectData();
    return projectResponseWorker.createSuccessResponse(data);
  }
  async _getSelectProjectFromRepository(accessID) {
    const commands = await repositoryWorker.getCommands(accessID);
    const creator = new SelectProjectDataCreator();

    return creator
      .setCommands(commands)
      .getSelectData();
  }
}

const selectProject = new SelectProject();
module.exports = selectProject;