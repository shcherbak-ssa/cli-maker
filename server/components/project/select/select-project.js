'use strict';

const projectResponseWorker = require('../data/project-response-worker');

class SelectProject {
  handler(workingData) {
    try {
      return await this._tryToRunHandler(workingData);
    } catch (error) {
      console.log(error);
    }
  }

  async _tryToRunHandler(workingData) {
    const accessID = workingData.getAccessID();
    const selectProjectData = await this._getSelectProjectFromRepository(accessID);
    const data = selectProjectData.getSelectProjectData();
    return projectResponseWorker.createSuccessResponse(data);
  }
  async _getSelectProjectFromRepository(accessID) {

  }
}

const selectProject = new SelectProject();
module.exports = selectProject;