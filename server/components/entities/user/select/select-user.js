'use strict';

const repositoryWorker = require('./src/repository-worker');
const SelectUserDataCreator = require('../data/select-user-data');
const userResponseWorker = require('../data/user-response-worker');
const {UserServerError} = require('../errors');

class SelectUser {
  async handler(workingData) {
    try {
      return await this._tryToRunHandler(workingData);
    } catch (error) {
      if( error.name !== 'UserError' ) {
        console.log(error);
        error = new UserServerError('could not find user');
      }
      
      return error.userResponse;
    }
  }

  async _tryToRunHandler(workingData) {
    const accessID = workingData.getAccessID();
    const selectUserData = await this._getSelectUserDataFromRepository(accessID);
    const data = selectUserData.getSelectUserData();
    return userResponseWorker.createSuccessResponse(data);
  }
  async _getSelectUserDataFromRepository(accessID) {
    const userData = await repositoryWorker.getUserData(accessID);
    const projects = await repositoryWorker.getProjects(accessID);
    const creator = new SelectUserDataCreator();

    return creator
      .setUserData(userData)
      .setProjects(projects)
      .getSelectData();
  }
}

const selectUser = new SelectUser();
module.exports = selectUser;