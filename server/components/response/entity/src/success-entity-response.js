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
    const responseObjectCreator = this._getResponseObjectCreator(responseType);
    const responseObject = await responseObjectCreator.create(entityResponse);
    const responseID = this._saveResponseObject(responseObject);
    return responseID;
  }
  _createEntityResponse(data) {
    const creator = new EntityResponseCreator();
      return creator
        .setData(data)
        .getResponse();
  }
  _getResponseObjectCreator(responseType) {
    switch(responseType) {
      case 'json':
        return jsonResponseObjectCreator;
      case 'file':
        return '';
    }
  }
  _saveResponseObject(responseObject) {
    return responseCache.addResponseObject(responseObject);
  }
}

const successEntityResponse = new SuccessEntityResponse();
module.exports = successEntityResponse;