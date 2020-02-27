'use strict';

class ResponseObjectData {
  code = 0;
  message = '';
  headers = {};
  filename = '';
}

class ResponseObject {
  constructor(responseObjectData) {
    this._data = responseObjectData;
  }

  getCode() {
    return this._data.code;
  }
  getMessage() {
    return this._data.message;
  }
  getHeaders() {
    return this._data.headers;
  }
  getFilename() {
    return this._data.filename;
  }
  setHeader(key, value) {
    this._data.headers[key] = value;
  }
}

class ResponseObjectCreator {
  constructor() {
    this._data = new ResponseObjectData();
  }

  setCode(code) {
    this._data.code = code;
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