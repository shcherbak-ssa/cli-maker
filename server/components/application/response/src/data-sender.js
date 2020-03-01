'use strict';

const FS = require('fs');

class DataSender {
  async sendFile(filename, response) {
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
  async sendJSON(object, response) {
    const jsonObject = JSON.stringify(object);
    response.end(jsonObject);
  }
}

const dataSender = new DataSender();
module.exports = dataSender;