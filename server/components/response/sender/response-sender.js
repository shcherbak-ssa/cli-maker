'use strict';

const {InternalSeverError} = require('../errors/request-errors');
const responseCache = require('../cache');
const dataSender = require('./src/data-sender');

class ResponseSender {
  async send(responseID, response) {
    try {
      await this._tryToSend(responseID, response);
    } catch(error) {
      console.log(error);
      await this.sendError(error, response);  
    }
  }
  async sendError(error, response) {
    try {
      if( 'responseID' in error ) {
        const {responseID} = error;
        await this._tryToSend(responseID, response);
      } else {
        throw new InternalSeverError();
      }
    } catch(error) {
      await this.sendError(error, response);
    }
  }

  async _tryToSend(responseID, response) {
    const responseObject = responseCache.getResponseObject(responseID);
    const type = responseObject.getType();
    const sender = this._getSender(type).bind(dataSender);
    await sender(responseObject, response);
  }
  _getSender(type) {
    switch(type) {
      case 'simple':
        return dataSender.sendSimpleResponse;
      case 'file':
        return dataSender.sendFileResponse;
      case 'json':
        return dataSender.sendJSONResponse;
      default:
        throw new InternalSeverError();
    }
  }
}

const responseSender = new ResponseSender();
module.exports = responseSender;