'use strict';

class ParsedURLData {
  path = '';
  params = new Map();
}

class ParsedURL {
  constructor(parsedURLData) {
    this._data = parsedURLData;
  }

  getPath() {
    return this._data.path;
  }
  getParamItem(key) {
    return this._data.params.get(key);
  }
}

class ParsedURLCreator {
  constructor() {
    this._data = new ParsedURLData();
  }

  setPath(path) {
    this._data.path = path;
  }
  setParams(params) {
    this._data.params = params;
  }
  getParsedURL() {
    return new ParsedURL(this._data);
  }
}

module.exports = ParsedURLCreator;