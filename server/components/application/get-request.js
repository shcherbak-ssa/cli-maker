'use strict';

const usersCreator = require('../user/users/users-creator');
const responseCreator = require('../response/response-creator');
const responseSender = require('../response/response-sender');
const urlParser = require('../parsers/url-parser');

const ROOT_PATHNAME = '/';

class GetRequest {
  async run(request, response) {
    let responseObject = null;

    try {
      responseObject = await this._tryToRun(request);  
    } catch (error) {
      if( error.name === 'RequestError' ) {
        console.log('get-request: ', error.message);
        responseObject = await responseCreator.createErrorResponse(error.errorData);
      } else {
        console.log(error);
      }
    } finally {
      if( responseObject === null ) return response.end();
      await responseSender.send(responseObject, response);
    }
  }

  async _tryToRun(request) {
    const parsedURL = urlParser.parse(request.url);
    const pathname = parsedURL.getPathname();

    return rootRequest.isRootRequest(pathname)
      ? await rootRequest.run()
      : await fileRequest.run(parsedURL);
  }

  _isRootRequest(pathname) {
    return pathname === ROOT_PATHNAME;
  }
  async _getResponseObjectForRootRequest() {
    const connectionID = await usersCreator.create();
    const responseObject = await this._getResponseObjectForFileRequest(ROOT_PATHNAME);
    responseObject.setHeader('Set-Cookie', `connectionID=${connectionID}`);
    return responseObject;
  }
  async _getResponseObjectForFileRequest(pathname) {
    if( responseCreator.isValid(pathname) )
      return responseCreator.createResponse(pathname)

    throw new NotFoundError(`file ${pathname} did not find`);
  }
}

const getRequest = new GetRequest();
module.exports = getRequest;