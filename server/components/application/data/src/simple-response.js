'use strict';

const {STATUS_CODES} = require('http');

class SimpleResponseData {
  constructor() {
    this.type = 'simple';
    this.statusCode = 0;
    this.message = '';
  }
}

class SimpleResponse {
  constructor(simpleResponseData) {
    this._data = simpleResponseData;
  }

  getType() {
    return this._data.type;
  }
  getStatusCode() {
    return this._data.statusCode;
  }
  getMessage() {
    return this._data.message
  }
}

class SimpleResponseCreator {
  constructor() {
    this._data = new SimpleResponseData();
  }

  setStatusCodeAndMessage(statusCode) {
    this._data.statusCode = statusCode;
    this._data.message = STATUS_CODES[statusCode];
    return this;
  }
  getResponseData() {
    return new SimpleResponse(this._data);
  }
}

module.exports = {
  SimpleResponseData,
  SimpleResponse,
  SimpleResponseCreator
};