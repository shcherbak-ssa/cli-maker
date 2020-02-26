'use strict';

class ParsedRequestData {
  accessID = '';
  data = new Map();
}

class ParsedRequest {
  constructor(parsedRequestData) {
    this.data = parsedRequestData;
  }

  getAccessID() {
    return this.data.accessID;
  }
  getData() {
    return this.data.data;
  }
}

class ParsedRequestCreator {
  constructor() {
    this.data = new ParsedRequestData();
  }

  setAccessID(accessID) {
    this.data.accessID = accessID;
  }
  setData(data) {
    this.data.data = data;
  }
  getParsedRequest() {
    return this.data;
  }
}

module.exports = ParsedRequestCreator;