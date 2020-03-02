'use strict';

const repostioryWorker = require('./repository-worker');
const SelectUserDataCreator = require('../../data/select-user-data');

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
    const SelectUserData = await this._getSelectUserDataFromRepository(accessID);
  }
  async _getSelectUserDataFromRepository(accessID) {}
}

const selectUser = new SelectUser();
module.exports = selectUser;