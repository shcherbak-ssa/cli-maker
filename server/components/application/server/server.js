'use strict';

const HTTP = require('http');
const GetRequestWorker = require('../get-request');

class AppServer {
  _getRequestWorker = new GetRequestWorker();

  constructor({port, host}) {
    this.port = port;
    this.host = host;
  }

  run() {
    try {
      this._tryToRunServer();
    } catch( err ) {
      console.log('server running error: ', err);
    }
  }

  _tryToRunServer() {
    const httpServer = new HTTP.Server();
    httpServer.on('request', this._requestHandler.bind(this));
    httpServer.listen(this.port, this.host, () => {
      console.log(`Server run on url: http://${this.host}:${this.port}/`);
    });
  }
  async _requestHandler(request, response) {
    try {
      await this._parseRequest(request, response);
    } catch (error) {
      console.log('parse request error: ', error);
    }
  }
  async _parseRequest(request, response) {
    const {method} = request;
    switch( method ) {
      case 'GET':
        return await this._getRequestWorker.run(request, response);
      case 'POST':
        console.log('it is POST method');
        break;
    }
  }
}

module.exports = AppServer;