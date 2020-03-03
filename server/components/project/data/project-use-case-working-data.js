'use strict';

const ProjectDataCreator = require('./project-data');

class ProjectUseCaseWorkingDataType {
  constructor() {
    this.accessID = '';
    this.data = {};
  }
}

class ProjectUseCaseWorkingData {
  constructor(projectUseCaseWorkingDataType) {
    this._data = projectUseCaseWorkingDataType;
  }

  getAccessID() {
    return this._data.accessID;
  }
  getProjectData() {
    return this._data.data;
  }
}

class ProjectUseCaseWorkingDataCreator {
  constructor() {
    this._data = new ProjectUseCaseWorkingDataType();
  }

  setAccessID(accessID) {
    this._data.accessID = accessID;
    return this;
  }
  setProjectData(data) {
    const {name, id} = data;
    const creator = new ProjectDataCreator();

    this._data.data = creator
      .setName(name)
      .setProjectID(id)
      .getProjectData();

    return this;
  }
  getWorkingData() {
    return new ProjectUseCaseWorkingData(this._data);
  }
}

module.exports = ProjectUseCaseWorkingDataCreator;