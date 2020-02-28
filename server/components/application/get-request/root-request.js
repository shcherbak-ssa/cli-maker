'use strict';

const usersCreator = require('../../user/users/users-creator');
const responseCreator = require('../response/response-creator');
const cookieParser = require('../parsers/cookie-parser');

const ROOT_PATHNAME = '/';
const ROOT_FILENAME = 'index.html';

class RootRequest {
  isRootRequest(pathname) {
    return pathname === ROOT_PATHNAME;
  }
  async run(parsedURL, request) {
    if( parsedURL.getParamItem('remove') === '' ) {
      await this._removeUser(request);
      return null;
    }

    const responseObject = await this._createUser();
    return responseObject;
  }
  
  async _createUser() {
    const connectionID = usersCreator.create();
    const responseObject = await responseCreator.createResponse(ROOT_FILENAME);
    responseObject.setHeader('Set-Cookie', `connectionID=${connectionID}`);
    return responseObject;
  }
  async _removeUser({headers}) {
    const connectionID = cookieParser.getConnectionID(headers);
    usersCreator.remove(connectionID);
  }
}

const rootRequest = new RootRequest();
module.exports = rootRequest;