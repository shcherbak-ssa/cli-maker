'use strict';

const usersCreator = require('../user/users/users-creator');
const responseCreator = require('./response/response-creator');
const responseSender = require('./response/response-sender');
const urlParser = require('./parsers/url-parser');

const ROOT_PATHNAME = '/';

class GetRequest {
  async run(request, response) {
    try {
      const fileResponse = await this._tryToRun(request);
      await responseSender.send(fileResponse, response);
    } catch (error) {
      await responseSender.sendError(error, response);
    }
  }

  async _tryToRun(request) {
    const parsedURL = urlParser.parse(request.url);
    const pathname = parsedURL.getPathname();
    
    return this._isRootRequest(pathname)
      ? await this._getResponseForRootRequest()
      : await this._getResponseForFileRequest(pathname);
  }

  _isRootRequest(pathname) {
    return pathname === ROOT_PATHNAME;
  }
  async _getResponseForRootRequest() {
    const connectionID = await usersCreator.create();
    const fileResponse = await this._getResponseForFileRequest(ROOT_PATHNAME);
    fileResponse.setHeader('Set-Cookie', `connectionID=${connectionID}`);
    return fileResponse;
  }
  async _getResponseForFileRequest(pathname) {
    return await responseCreator.createFileResponse(pathname);
  }
}

const getRequest = new GetRequest();
module.exports = getRequest;