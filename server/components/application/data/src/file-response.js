'use strict';

const {
  SimpleResponseData,
  SimpleResponse,
  SimpleResponseCreator
} = require('./simple-response');

class FileResponseData extends SimpleResponseData {
  constructor() {
    super();
    this.type = 'file';
    this.headers = {};
    this.filename = '';
  }
}

class FileResponse extends SimpleResponse {
  constructor(fileResponseData) {
    super(fileResponseData);
  }

  setHeader(key, value) {
    this._data.headers[key] = value;
  }
  getHeaders() {
    return this._data.headers;
  }
  getFilename() {
    return this._data.filename;
  }
}

class FileResponseCreator extends SimpleResponseCreator {
  constructor() {
    super();
    this._data = new FileResponseData();
  }

  setHeaders(headers) {
    this._data.headers = headers;
    return this;
  }
  setFilename(filename) {
    this._data.filename = filename;
    return this;
  }
  getResponseData() {
    return new FileResponse(this._data);
  }
}

module.exports = FileResponseCreator;