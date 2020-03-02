'use strict';

class SelectUserDataType {
  constructor() {
    userData = {};
    projects = [];
  }
}

class SelectUserData {
  constructor(selectUserDataType) {
    this._data = selectUserDataType;
  }

  getSelectUserData() {
    return this._data;
  }
}

class SelectUserDataCreator {
  constructor() {
    this._data = new SelectUserDataType();
  }

  setUserData(userData) {
    this._data.userData = userData;
  }
  setProjects(projects) {
    this._data.projects = projects;
  }
  getSelectData() {
    return new SelectUserData(this._data);
  }
}

module.exports = SelectUserDataCreator;