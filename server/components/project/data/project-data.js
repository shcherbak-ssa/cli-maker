'use strict';

class ProjectDataType {
  constructor() {
    this.name = '';
    this.id = '';
  }
}

class ProjectData {
  constructor(projectDataType) {
    this._data = projectDataType;
  }

  getName() {
    return this._data.name;
  }
  getProjectID() {
    return this._data.id;
  }
  getData() {
    return this._data;
  }
}

class ProjectDataCreator {
  constructor() {
    this._data = new ProjectDataType();
  }

  setName(name) {
    this._data.name = name;
    return this;
  }
  setProjectID(id) {
    this._data.id = id;
    return this;
  }
  getProjectData() {
    return new ProjectData(this._data);
  }
}

module.exports = ProjectDataCreator;