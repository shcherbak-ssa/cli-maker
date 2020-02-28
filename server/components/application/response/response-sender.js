'use strict';

const FS = require('fs');

class ResponseSender {
  async send(responseObject, response) {
    try {
      await this._tryToSend(responseObject, response);
    } catch(error) {
      console.log('send file error: ', error);
      response.end();
    }
  }

  async _tryToSend(responseObject, response) {
    const head = responseObject.getHead();
    response.writeHead(...head);

    if( filename === null ) return response.end();
    await this._sendFiledata(filename, response);
  }
  async _sendFiledata(filename, response) {
    const readStream = new FS.ReadStream(filename);

    readStream
      .on('readable', () => {
        const data = readStream.read();
        if( data !== null ) response.write(data);
      })
      .on('end', () => {
        response.end();
      })
      .on('error', (error) => {
        console.log('send file error: ', error);
        response.end();
      });
  }
}

const responseSender = new ResponseSender();
module.exports = responseSender;