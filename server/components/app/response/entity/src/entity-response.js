'use strict';

class EntityResponseData {
  constructor() {
    this.isError = false;
    this.type = '';
    this.message = '';
    this.data = {};
  }
}

class EntityResponse {
  constructor(entityResponseData) {
    this._data = entityResponseData;
  }

  getResponse() {
    return this._data;
  }
}

class EntityResponseCreator {
  constructor() {
    this._data = new EntityResponseData();
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
    return new EntityResponse(this._data);
  }
}

module.exports = EntityResponseCreator;