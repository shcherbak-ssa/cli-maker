'use strict';

const {existsSync} = require('fs');
const SUCCESS_STATUS_CODE = 200;

const publicFilesController = require('./src/public-files-controller');
const {NotFoundError, InternalSeverError} = require('../errors/request-errors');
const {FileResponseCreator, JSONResponseCreator} = require('../data/response-creators');

class ResponseCreator {
  
  async createFileResponse(pathname) {
    try {
      return await this._tryToCreateFileResponse(pathname);
    } catch (error) {
      if( error.name === 'RequestError' ) throw error;
      else {
        console.log(error);
        throw new InternalSeverError();
      }
    }
  }
  async createJSONResponse(entityResponse) {
    try {
      const responseData = entityResponse.getResponseData();
      return await this._tryToCreateJSONResponse(responseData);
    } catch (error) {
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
    return creator
      .setStatusCodeAndMessage(SUCCESS_STATUS_CODE)
      .setHeaders(headers)
      .setFilename(filename)
      .getResponseData();
  }

  async _tryToCreateJSONResponse(responseData) {
    const creator = new JSONResponseCreator();
    return creator
      .setStatusCodeAndMessage(SUCCESS_STATUS_CODE)
      .setData(responseData)
      .getResponseData();
  }
}

const responseCreator = new ResponseCreator();
module.exports = responseCreator;