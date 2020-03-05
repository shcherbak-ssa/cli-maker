'use strict';

const URL = require('url');
const QUERYSTRING = require('querystring');
const ParsedURLCreator = require('../data/parsed-url');

class URLParser {
  parse(url) {
    const parsedURL = URL.parse(url);
    const pathname = this._getPathname(parsedURL);
    const params = this._getParams(parsedURL);
    const creator = new ParsedURLCreator();

    return creator
      .setPathname(pathname)
      .setParams(params)
      .getParsedURL();
  }
  
  _getPathname(parsedURL) {
    return parsedURL.pathname;
  }
  _getParams(parsedURL) {
    const query = parsedURL.query;
    const queryString = QUERYSTRING.parse(query);
    const queryStringEntries = Object.entries(queryString);
    return new Map(queryStringEntries);
  }
}

const urlParser = new URLParser();
module.exports = urlParser;