'use strict';

const repositoryWorker = require('./repository-worker');
const SelectUserDataCreator = require('../../data/select-user-data');
const userResponseWorker = require('../../data/user-response-worker');

class SelectUser {
  async handler(workingData) {
    try {
      return await this._tryToRunHandler(workingData);
    } catch (error) {
      console.log(error);
    }
  }

  async _tryToRunHandler(workingData) {
    const accessID = workingData.getAccessID();
    const selectUserData = await this._getSelectUserDataFromRepository(accessID);
    const data = selectUserData.getSelectUserData();

    return userResponseWorker.createSuccessResponse(data);
  }
  async _getSelectUserDataFromRepository(accessID) {
    const userDataType = await repositoryWorker.getUserData(accessID);
    const projects = await repositoryWorker.getProjects(accessID);
    const creator = new SelectUserDataCreator();

    return creator
      .setUserData(userDataType)
      .setProjects(projects)
      .getSelectData();
  }
}

const selectUser = new SelectUser();
module.exports = selectUser;