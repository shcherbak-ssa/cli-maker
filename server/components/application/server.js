'use strict';

const HTTP = require('http');
const getRequest = require('./get-request');
const postRequest = require('./post-request');

const {MethodNotAllowed} = require('./errors/request-errors');
const responseCreator = require('./response/response-creator');
const responseSender = require('./response/response-sender');

class AppServer {
  constructor({port, host}) {
    this.port = port;
    this.host = host;
  }

  run() {
    try {
      this._tryToRunServer();
    } catch( err ) {
      console.log('server running error: ', err);
      process.exit(1);
    }
  }

  _tryToRunServer() {
    const httpServer = new HTTP.Server();
    httpServer
      .on('request', this._requestHandler.bind(this))
      .listen(this.port, this.host, () => {
        console.log(`Server run on url: http://${this.host}:${this.port}/`);
      });
  }
  async _requestHandler(request, response) {
    try {
      await this._parseRequest(request, response);
    } catch (error) {
      if( error.name === 'RequestError' ) {
        const responseObject = await responseCreator.createErrorResponse(error.errorData);
        return await responseSender.send(responseObject, response);
      } else {
        console.log('parse request error: ', error);
      }
    }
  }
  async _parseRequest(request, response) {
    const {method} = request;
    switch( method ) {
      case 'GET':
        return await getRequest.run(request, response);
      case 'POST':
        return await postRequest.run(request, response);
      default:
        throw new MethodNotAllowed(`invalid method ${method}`);
    }
  }
}

module.exports = AppServer;