'use strict';

const FS = require('fs');

class DataSender {
  async sendSimpleResponse(simpleResponse, response) {
    await this._writeHead(simpleResponse, response);
    response.end();
  }
  async sendFileResponse(fileResponse, response) {
    const filename = fileResponse.getFilename();
    await this._writeHead(fileResponse, response);
    await this._sendFile(filename, response);
    response.end();
  }
  async sendJSONResponse(jsonResponse, response) {
    const jsonObject = jsonResponse.getStringifyData();
    await this._writeHead(jsonResponse, response);
    response.end(jsonObject);
  }

  async _writeHead(responseObject, response) {
    const statusCode = responseObject.getStatusCode();
    const message = responseObject.getMessage();
    const headers = responseObject.getHeaders() || {};
    response.writeHead(statusCode, message, headers);
  }
  async _sendFile(filename, response) {
    return new Promise((success, error) => {
      const readStream = new FS.ReadStream(filename);
      readStream
        .on('readable', () => {
          const data = readStream.read();
          if( data !== null ) response.write(data);
        })
        .on('end', success)
        .on('error', error)
    });
  }
}

const dataSender = new DataSender();
module.exports = dataSender;