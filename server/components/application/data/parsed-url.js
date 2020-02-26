'use strict';

class ParsedURLData {
  path = '';
  params = new Map();
}

class ParsedURL {
  constructor(parsedURLData) {
    this.data = parsedURLData;
  }

  getPath() {
    return this.data.path;
  }
  getParamItem(key) {
    return this.data.params.get(key);
  }
}

class ParsedURLCreator {
  constructor() {
    this.data = new ParsedURLData();
  }

  setPath(path) {
    this.data.path = path;
  }
  setParams(params) {
    this.data.params = params;
  }
  getParsedURL() {
    return this.data;
  }
}

module.exports = ParsedURLCreator;