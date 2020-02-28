'use strict';

class ResponseObjectData {
  statusCode = 0;
  message = '';
  headers = {};
  filename = '';
}

class ResponseObject {
  constructor(responseObjectData) {
    this._data = responseObjectData;
  }

  getHead() {
    return [
      this._data.statusCode,
      this._data.message,
      this._data.headers
    ]
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
  }
  setMessage(message) {
    this._data.message = message;
  }
  setHeaders(headers) {
    this._data.headers = headers;
  }
  setFilename(filename) {
    this._data.filename = filename;
  }
  getResponseObject() {
    return new ResponseObject(this._data)
  }
}

module.exports = ResponseObjectCreator;