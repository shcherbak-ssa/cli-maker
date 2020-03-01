'use strict';

const {STATUS_CODES} = require('http');
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
        await this._tryToSendError(responseObject, response);
      }
      throw new InternalSeverError();
    } catch(error) {
      console.log(error);
      await this.sendError(error, response);
    }
  }

  async _tryToSend(responseObject, response) {
    const statusCode = responseObject.getStatusCode();
    const message = STATUS_CODES[statusCode];
    const headers = responseObject.getHeaders();
    response.writeHead(statusCode, message, headers);

    const filename = responseObject.getFilename();
    await dataSender.sendFile(filename, response);
  }
  async _tryToSendError(responseObject, response) {
    const filename = responseObject.getFilename();
    if( filename !== null ) return await this._tryToSend(responseObject, response);

    const statusCode = responseObject.getStatusCode();
    const message = STATUS_CODES[statusCode];
    response.writeHead(statusCode, message);
    response.end();
  }
}

const responseSender = new ResponseSender();
module.exports = responseSender;