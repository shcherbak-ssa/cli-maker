'use strict';

const headersConfig = require('./headers.config.json');

class HeadersCreator {
  constructor() {
    const headerEntries = Object.entries(headersConfig);
    this.headers = new Map(headerEntries);
  }
  create(fileExtension) {
    return this.headers.get(fileExtension);
  }
}

const headersCreator = new HeadersCreator();
module.exports = headersCreator;