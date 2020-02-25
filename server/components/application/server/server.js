'use strict';

const HTTP = require('http');

class AppServer {
  constructor({port, host}) {
    this.port = port;
    this.host = host;
  }

  run() {
    const httpServer = new HTTP.Server();
    httpServer.on('request', this._requestHandler);
    httpServer.listen(this.port, this.host, () => {
      console.log(`Server run on url: http://${this.host}:${this.port}/`);
    });
  }
  _requestHandler(request, response) {
    console.log(request.url);
    response.end('Hello, I am CLI Maker!');
  }
}

module.exports = AppServer;