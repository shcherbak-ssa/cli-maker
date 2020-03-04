'use strict';

const {existsSync} = require('fs');
const publicFilesController = require('../public-files/public-files-controller');
const FileResponseCreator = require('./src/file-response');

class FileResponseObjectCreator {

  async createFileResponse(statusCode, pathname) {
    try {
      return await this._tryToCreateFileResponse(statusCode, pathname);
    } catch (error) {
      if( error.name === 'RequestError' ) throw error;
      else {
        console.log(error);
        throw new InternalSeverError();
      }
    }
  }

  async _tryToCreateFileResponse(statusCode, pathname) {
    const publicFileConfig = await publicFilesController.getPublicFileConfig(pathname);
    if( this._isFileExist(publicFileConfig.filename) )
      return this._createFileResponseObject(statusCode, publicFileConfig);

    throw new NotFoundError(`cannot resolve filename - ${publicFileConfig.filename}`);
  }
  _isFileExist(filename) {
    return existsSync(filename);
  }
  _createFileResponseObject(statusCode, {headers, filename}) {
    const creator = new FileResponseCreator();
    return creator
      .setStatusCodeAndMessage(statusCode)
      .setHeaders(headers)
      .setFilename(filename)
      .getResponseData();
  }
}

const fileResponseObjectCreator = new FileResponseObjectCreator();
module.exports = fileResponseObjectCreator;