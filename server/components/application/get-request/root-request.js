'use strict';

const usersCreator = {
  remove(connectionID) {},
  create() { return '123' }
};
const responseCreator = require('../app-response/response-creator');
const cookieParser = require('../request-parsers/cookie-parser');

class RootRequest {
  ROOT_PATHNAME = '/';

  isRootRequest(pathname) {
    return pathname === this.ROOT_PATHNAME;
  }
  async run(parsedURL, request) {
    if( parsedURL.getParamItem('remove') === '' ) {
      await this._removeUser(request);
      return null;
    }

    const getResponse = this._createUser();
    return getResponse;
  }
  
  async _createUser() {
    const connectionID = usersCreator.create();
    const getResponse = responseCreator.createResponse(this.ROOT_PATHNAME);
    return getResponse;
  }
  async _removeUser({headers}) {
    const connectionID = cookieParser.getConnectionID(headers);
    usersCreator.remove(connectionID);
  }
}

const rootRequest = new RootRequest();
module.exports = rootRequest;