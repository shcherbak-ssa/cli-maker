'use strict';

const HTTP = require('http');

const getRequest = require('./get-request');
const postRequest = require('./post-request');

const responseSender = require('./response/response-sender');
const {MethodNotAllowedError} = require('./errors/request-errors');

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
      console.log(error);
      await responseSender.sendError(error, response);
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
        throw new MethodNotAllowedError(`invalid method ${method}`);
    }
  }
}

module.exports = AppServer;