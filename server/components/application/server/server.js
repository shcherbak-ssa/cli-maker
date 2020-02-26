'use strict';

const HTTP = require('http');

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
    }
  }

  _tryToRunServer() {
    const httpServer = new HTTP.Server();
    httpServer.on('request', this._requestHandler);
    httpServer.listen(this.port, this.host, () => {
      console.log(`Server run on url: http://${this.host}:${this.port}/`);
    });
  }
  _requestHandler(request, response) {
    const {method} = request;
    switch( method ) {
      case 'GET':
        console.log('it is GET method');
        break;
      case 'POST':
        console.log('it is POST method');
        break;
    }

    response.end('Hello, I am CLI Maker!');
  }
}

module.exports = AppServer;