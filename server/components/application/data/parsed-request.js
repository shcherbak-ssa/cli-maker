'use strict';

class ParsedRequestData {
  accessID = '';
  data = {};
}

class ParsedRequest {
  constructor(parsedRequestData) {
    this._data = parsedRequestData;
  }

  getAccessID() {
    return this._data.accessID;
  }
  getData() {
    return this._data.data;
  }
}

class ParsedRequestCreator {
  constructor() {
    this._data = new ParsedRequestData();
  }

  setAccessID(accessID) {
    this._data.accessID = accessID;
  }
  setData(data) {
    this._data.data = data
  }
  getParsedRequest() {
    return new ParsedRequest(this._data);
  }
}

module.exports = ParsedRequestCreator;