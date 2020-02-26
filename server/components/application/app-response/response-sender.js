'use strict';

const FS = require('fs');

class ResponseSender {
  async send(getResponse, response) {
    const {code, headers, filename} = getResponse;
    response.writeHead(code, headers);
    await this._sendFiledata(filename, response);
  }

  async _sendFiledata(filename, response) {
    const readStream = new FS.createReadStream(filename);
    readStream.on('readable', () => {
      const data = readStream.read();
      if( data !== null ) response.write(data);
    });
    readStream.on('end', () => {
      response.end();
    });
    readStream.on('error', (error) => {
      console.log('send file error: ', error);
      response.end();
    });
  }
}

module.exports = ResponseSender;