'use strict';

const nanoid = require('nanoid');
const RESPONSE_ID_SIZE = 18;

class ResponseCache {
  constructor() {
    this._cache = new Map();
  }

  addResponseObject(responseObject) {
    const responseID = this._generateResponseID();
    this._cache.set(responseID, responseObject);
    return responseID;
  }
  getResponseObject(responseID) {
    return this._cache.get(responseID);
  }
  removeResponseObject(responseID) {
    this._cache.delete(responseID);
  }

  _generateResponseID() {
    const responseID = nanoid(RESPONSE_ID_SIZE);
    return this._cache.has(responseID)
      ? this._generateResponseID() : responseID; 
  }
}

const responseCache = new ResponseCache();
module.exports = responseCache;