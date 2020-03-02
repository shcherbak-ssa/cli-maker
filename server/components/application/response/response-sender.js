'use strict';

const {InternalSeverError} = require('../errors/request-errors');
const dataSender = require('./src/data-sender');

class ResponseSender {
  async send(responseObject, response) {
    try {
      await this._tryToSend(responseObject, response);
    } catch(error) {
      console.log(error);
      await this.sendError(error, response);  
    }
  }
  async sendError(error, response) {
    try {
      if( error.name === 'RequestError' ) {
        const {responseObject} = error;
        await this._tryToSend(responseObject, response);
      } else {
        throw new InternalSeverError();
      }
    } catch(error) {
      console.log(error);
      await this.sendError(error, response);
    }
  }

  async _tryToSend(responseObject, response) {
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