'use strict';

const responseCache = require('../../cache');
const EntityResponseCreator = require('./entity-response');
const jsonResponseObjectCreator = require('../../object/json-response-object-creator');

class ErrorEntityResponse {
  async create(data, responseType) {
    try {
      return await this._tryToCreate(data, responseType);
    } catch (error) {
      console.log(error);
    }
  }

  async _tryToCreate(data, responseType) {
    const entityResponse = this._createEntityResponse(data);
    const responseObject = await this._createResponseObject(entityResponse);
    const responseID = this._saveResponseObjectInCache(responseObject);
    return responseID;
  }
  _createEntityResponse(type, message) {
    const creator = new EntityResponseCreator();
    return creator
      .setErrorFlag(true)
      .setType(type)
      .setMessage(message)
      .getResponse();
  }
  async _createResponseObject(entityResponse) {
    return await jsonResponseObjectCreator.create(entityResponse);
  }
  _saveResponseObjectInCache(responseObject) {
    return responseCache.addResponseObject(responseObject);
  }
}

const errorEntityResponse = new ErrorEntityResponse();
module.exports = errorEntityResponse;