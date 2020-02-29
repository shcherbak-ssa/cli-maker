'use strict';

class ResponseObjectData {
  statusCode = 0;
  headers = {};
  filename = '';
}

class ResponseObject {
  constructor(responseObjectData) {
    this._data = responseObjectData;
  }

  setHeader(key, value) {
    this._data.headers[key] = value;
  }
  getStatusCode() {
    return this._data.statusCode;
  }
  getHeaders() {
    return this._data.headers;
  }
  getFilename() {
    return this._data.filename;
  }
}

class ResponseObjectCreator {
  constructor() {
    this._data = new ResponseObjectData();
  }

  setStatusCode(statusCode) {
    this._data.statusCode = statusCode;
    return this;
  }
  setHeaders(headers) {
    this._data.headers = headers;
    return this;
  }
  setFilename(filename) {
    this._data.filename = filename;
    return this;
  }
  getResponseObject() {
    return new ResponseObject(this._data)
  }
}

module.exports = ResponseObjectCreator;