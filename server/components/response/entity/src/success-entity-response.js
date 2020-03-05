'use strict';

const responseCache = require('../../cache');
const EntityResponseCreator = require('./entity-response');
const jsonResponseObjectCreator = require('../../object/json-response-object-creator');

class SuccessEntityResponse {
  async create(data, responseType) {
    try {
      return await this._tryToCreate(data, responseType);
    } catch (error) {
      console.log(error);
    }
  }

  async _tryToCreate(data, responseType) {
    const entityResponse = this._createEntityResponse(data);
    const responseObject = await this._createResponseObject(responseType, entityResponse);
    const responseID = this._saveResponseObjectInCache(responseObject);
    return responseID;
  }
  _createEntityResponse(data) {
    const creator = new EntityResponseCreator();
      return creator
        .setData(data)
        .getResponse();
  }
  async _createResponseObject(responseType, entityResponse) {
    switch(responseType) {
      case 'json':
        return jsonResponseObjectCreator.create(entityResponse);
      case 'file':
        return '';
    }
  }
  _saveResponseObjectInCache(responseObject) {
    return responseCache.addResponseObject(responseObject);
  }
}

const successEntityResponse = new SuccessEntityResponse();
module.exports = successEntityResponse;