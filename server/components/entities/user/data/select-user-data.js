'use strict';

class SelectUserDataType {
  constructor() {
    this.userData = {};
    this.projects = [];
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
    return this;
  }
  setProjects(projects) {
    this._data.projects = projects;
    return this;
  }
  getSelectData() {
    return new SelectUserData(this._data);
  }
}

module.exports = SelectUserDataCreator;