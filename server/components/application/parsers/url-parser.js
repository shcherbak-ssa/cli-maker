'use strict';

const URL = require('url');
const QUERYSTRING = require('querystring');

const ParsedURLCreator = require('../data/parsed-url');

class URLParser {
  parse(url) {
    try {
      return this._tryToParse(url);
    } catch (error) {
      console.log(error);
    }
  }
  
  _tryToParse(url) {
    const parsedURL = URL.parse(url);
    const parsedURLCreator = new ParsedURLCreator();

    const pathname = this._getPathname(parsedURL);
    parsedURLCreator.setPathname(pathname);

    const params = this._getParams(parsedURL);
    parsedURLCreator.setParams(params);

    return parsedURLCreator.getParsedURL();
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