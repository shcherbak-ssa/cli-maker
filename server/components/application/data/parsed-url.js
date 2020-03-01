'use strict';

class ParsedURLData {
  pathname = '';
  params = new Map();
}

class ParsedURL {
  constructor(parsedURLData) {
    this._data = parsedURLData;
  }

  getPathname() {
    return this._data.pathname;
  }
  getParamItem(key) {
    return this._data.params.get(key);
  }
  parsePathname() {
    const pathname = this._data.pathname.slice(1);
    return pathname.split('/');
  }
}

class ParsedURLCreator {
  constructor() {
    this._data = new ParsedURLData();
  }

  setPathname(pathname) {
    this._data.pathname = pathname;
  }
  setParams(params) {
    this._data.params = params;
  }
  getParsedURL() {
    return new ParsedURL(this._data);
  }
}

module.exports = ParsedURLCreator;