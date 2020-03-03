'use strict';

class ProjectSelectWorkingData {
  constructor(accessID) {
    this._accessID = accessID;
  }

  getAccessID() {
    return this._accessID;
  }
}

class ProjectSelectWorkingDataCreator {
  constructor() {
    this._accessID = '';
  }

  setAccessID(accessID) {
    this._accessID = accessID;
    return this;
  }
  getWorkingData() {
    return new ProjectSelectWorkingData(this._accessID);
  }
}

module.exports = ProjectSelectWorkingDataCreator;