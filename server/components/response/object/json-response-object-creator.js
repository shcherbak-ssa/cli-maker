'use strict';

const SUCCESS_STATUS_CODE = require('./src/success-status-code');
const JSONResponseCreator = require('./src/json-response');

class JSONResponseObjectCreator {
  
  async createJSONResponse(entityResponse) {
    try {
      const responseData = entityResponse.getResponseData();
      return await this._tryToCreateJSONResponse(responseData);
    } catch (error) {
      throw new InternalSeverError();
    }
  }

  async _tryToCreateJSONResponse(responseData) {
    const creator = new JSONResponseCreator();
    return creator
      .setStatusCodeAndMessage(SUCCESS_STATUS_CODE)
      .setData(responseData)
      .getResponseData();
  }
}

const jsonResponseObjectCreator = new JSONResponseObjectCreator();
module.exports = jsonResponseObjectCreator;