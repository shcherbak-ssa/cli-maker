'use strict';

class UserResponseData {
  constructor() {
    this.isError = false;
    this.type = '';
    this.message = '';
    this.data = {};
  }
}

class UserResponse {
  constructor(userResponseData) {
    this._data = userResponseData;
  }

  getResponseData() {
    return this._data;
  }
}

class UserResponseCreator {
  constructor() {
    this._data = new UserResponseData();
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
    return new UserResponse(this._data);
  }
}

module.exports = UserResponseCreator;