'use strict';

const FS = require('fs');
const {STATUS_CODES} = require('http');
const {InternalSeverError} = require('../errors/request-errors');

class ResponseSender {
  async send(responseObject, response) {
    try {
      await this._tryToSend(responseObject, response);
    } catch(error) {
      console.log(error);
      await this.sendInternalServerError(response);  
    }
  }
  async sendError(responseObject, response) {
    try {
      await this._tryToSendError(responseObject, response);
    } catch(error) {
      console.log(error);
      await this.sendInternalServerError(response);
    }
  }
  async sendInternalServerError(response) {
    const requestError = new InternalSeverError();
    responseObject = requestError.responseObject;
    await this.sendError(responseObject, response); 
  }

  async _tryToSend(responseObject, response) {
    const statusCode = responseObject.getStatusCode();
    const message = STATUS_CODES[statusCode];
    const headers = responseObject.getHeaders();
    response.writeHead(statusCode, message, headers);

    const filename = responseObject.getFilename();
    await this._sendFile(filename, response);
  }
  async _tryToSendError(responseObject, response) {
    const filename = responseObject.getFilename();
    if( filename !== null ) return await this._tryToSend(responseObject, response);

    const statusCode = responseObject.getStatusCode();
    const message = STATUS_CODES[statusCode];
    response.writeHead(statusCode, message);
    response.end();
  }

  async _sendFile(filename, response) {
    return new Promise((success, error) => {
      const readStream = new FS.ReadStream(filename);
      readStream
        .on('readable', () => {
          const data = readStream.read();
          if( data !== null ) response.write(data);
        })
        .on('end', () => {
          response.end();
          success();
        })
        .on('error', error);
    });
  }
}

const responseSender = new ResponseSender();
module.exports = responseSender;