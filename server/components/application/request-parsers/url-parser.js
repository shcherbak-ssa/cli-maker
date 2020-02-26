'use strict';

const URL = require('url');
const ParsedURLCreator = require('../data/parsed-url');

class URLParser {
  parse(url) {
    const parsedURL = URL.parse(url);
    const parsedURLCreator = new ParsedURLCreator();

    const path = this._getPath(parsedURL);
    parsedURLCreator.setPath(path);

    return parsedURLCreator.getParsedURL();
  }
  
  _getPath(parsedURL) {
    return parsedURL.path;
  }
}

const urlParser = new URLParser();
module.exports = urlParser;