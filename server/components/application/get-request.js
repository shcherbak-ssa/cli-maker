'use strict';

const usersCreator = require('../user/users/users-creator');
const responseCreator = require('./response/response-creator');
const responseSender = require('./response/response-sender');
const urlParser = require('./parsers/url-parser');

const ROOT_PATHNAME = '/';

class GetRequest {
  async run(request, response) {
    try {
      const responseObject = await this._tryToRun(request);
      await responseSender.send(responseObject, response);
    } catch (error) {
      responseSender.sendError(error, response);
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
    const responseObject = await this._getResponseForFileRequest(ROOT_PATHNAME);
    responseObject.setHeader('Set-Cookie', `connectionID=${connectionID}`);
    return responseObject;
  }
  async _getResponseForFileRequest(pathname) {
    return responseCreator.createResponse(pathname)
  }
}

const getRequest = new GetRequest();
module.exports = getRequest;