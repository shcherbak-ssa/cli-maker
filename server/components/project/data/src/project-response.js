'use strict';

class ProjectResponseData {
  constructor() {
    this.isError = false;
    this.type = '';
    this.message = '';
    this.data = {};
  }
}

class ProjectResponse {
  constructor(projectResponseData) {
    this._data = projectResponseData;
  }

  getResponseData() {
    return this._data;
  }
}

class ProjectResponseCreator {
  constructor() {
    this._data = new ProjectResponseData();
  }

  setErrorFlag(isError) {
    this._data.isError = isError;
    return this;
  }
  setType(type) {
    this._data.type = type;
    return this;
  }
  setMessage(message) {
    this._data.message = message;
    return this;
  }
  setData(data) {
    this._data.data = data;
    return this;
  }
  getResponse() {
    return new ProjectResponse(this._data);
  }
}

module.exports = ProjectResponseCreator;