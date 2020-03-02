'use strict';

const FS = require('fs');

class DataSender {
  async sendSimpleResponse(simpleResponse, response) {
    await this._writeHead(simpleResponse, response);
    response.end();
    console.log(`sent simple response: ${simpleResponse.getStatusCode}`);
  }
  async sendFileResponse(fileResponse, response) {
    const filename = fileResponse.getFilename();
    await this._writeHead(fileResponse, response);
    await this._sendFile(filename, response);
    response.end();
    console.log(`sent file: ${filename}`);
  }
  async sendJSONResponse(jsonResponse, response) {
    const jsonObject = jsonResponse.getStringifyData();
    await this._writeHead(jsonResponse, response);
    response.end(jsonObject);
    console.log(`sent json: ${jsonObject}`);
  }

  async _writeHead(responseObject, response) {
    const statusCode = responseObject.getStatusCode();
    const message = responseObject.getMessage();
    const headers = 'getHeaders' in responseObject
      ? responseObject.getHeaders() : {};
      
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