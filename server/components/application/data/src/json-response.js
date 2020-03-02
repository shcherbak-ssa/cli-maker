'use strict';

const {
  SimpleResponseData,
  SimpleResponse,
  SimpleResponseCreator
} = require('./simple-response');

class JSONResponseData extends SimpleResponseData {
  constructor() {
    super();
    this.type = 'json';
    this.headers = {
      'Content-Type': 'application/json'
    };
    this.data = {};
  }
}

class JSONResponse extends SimpleResponse {
  constructor(jsonResponseData) {
    super(jsonResponseData);
  }

  getHeaders() {
    return this._data.headers;
  }
  getStringifyData() {
    return JSON.stringify(this._data.data);
  }
}

class JSONResponseCreator extends SimpleResponseCreator {
  constructor() {
    super();
    this._data = new JSONResponseData();
  }

  setData(data) {
    this._data.data = data;
  }
  getResponseData() {
    return new JSONResponse(this._data);
  }
}

module.exports = JSONResponseCreator;