'use strict';

const {existsSync} = require('fs');
const SUCCESS_STATUS_CODE = 200;

const publicFilesController = require('./src/public-files-controller');
const {NotFoundError, InternalSeverError} = require('../errors/request-errors');
const {FileResponseCreator} = require('../data/response-creators');

class ResponseCreator {
  
  async createFileResponse(pathname) {
    try {
      return await this._tryToCreateFileResponse(pathname);
    } catch (error) {
      console.log(error);
      if( error.name === 'RequestError' ) throw error;
      throw new InternalSeverError();
    }
  }

  async _tryToCreateFileResponse(pathname) {
    const publicFileConfig = await publicFilesController.getPublicFileConfig(pathname);
    if( this._isFileExist(publicFileConfig.filename) )
      return this._createFileResponseObject(publicFileConfig);

    throw new NotFoundError(`cannot resolve filename - ${publicFileConfig.filename}`);
  }
  
  _isFileExist(filename) {
    return existsSync(filename);
  }
  _createFileResponseObject({headers, filename}) {
    const creator = new FileResponseCreator();
    creator
      .setStatusCodeAndMessage(SUCCESS_STATUS_CODE)
      .setHeaders(headers)
      .setFilename(filename);

    return creator.getResponseData();
  }
}

const responseCreator = new ResponseCreator();
module.exports = responseCreator;