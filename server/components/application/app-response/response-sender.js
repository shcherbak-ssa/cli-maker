'use strict';

const FS = require('fs');

class ResponseSender {
  async send(getResponse, response) {
    try {
      await this._tryToSend(getResponse, response);
    } catch(error) {
      console.log('send file error: ', error);
      response('Fuck!');
    }
  }

  async _tryToSend(getResponse, response) {
    const {code, headers, filename} = getResponse;
    console.log('code', code);
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

const responseSender = new ResponseSender();
module.exports = responseSender;