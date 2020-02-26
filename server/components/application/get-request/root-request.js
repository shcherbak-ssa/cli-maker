'use strict';

const usersCreator = {
  remove(connectionID) {},
  create() { return '123' }
};
const responseCreator = {
  createResponse(url) {
    return {};
  }
};

const cookieParser = require('../request-parsers/cookie-parser');

class RootRequestWorker {
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

module.exports = RootRequestWorker;