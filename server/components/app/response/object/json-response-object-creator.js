'use strict';

const SUCCESS_STATUS_CODE = require('./src/success-status-code');
const JSONResponseCreator = require('./src/json-response');

class JSONResponseObjectCreator {
  
  async create(entityResponse) {
    try {
      const responseData = entityResponse.getResponseData();
      return await this._tryToCreate(responseData);
    } catch (error) {
      throw new InternalSeverError();
    }
  }

  async _tryToCreate(responseData) {
    const creator = new JSONResponseCreator();
    return creator
      .setStatusCodeAndMessage(SUCCESS_STATUS_CODE)
      .setData(responseData)
      .getResponseData();
  }
}

const jsonResponseObjectCreator = new JSONResponseObjectCreator();
module.exports = jsonResponseObjectCreator;