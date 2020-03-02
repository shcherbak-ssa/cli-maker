'use strict';

class UserSelectWorkingData {
  constructor(accessID) {
    this._accessID = accessID;
  }

  getAccessID() {
    return this._accessID;
  }
}

class UserSelectWorkingDataCreator {
  constructor() {
    this._accessID = '';
  }

  setAccessID(accessID) {
    this._accessID = accessID;
  }
  getWorkingData() {
    return new UserSelectWorkingData(this._accessID);
  }
}

module.exports = UserSelectWorkingDataCreator;