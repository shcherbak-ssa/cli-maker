'use strict';

const usersCreator = require('../../user/users/users-creator');
const responseCreator = require('../response/response-creator');

const ROOT_PATHNAME = '/';
const ROOT_FILENAME = 'index.html';

class RootRequest {
  isRootRequest(pathname) {
    return pathname === ROOT_PATHNAME;
  }
  async run() {
    const connectionID = await this._createUser();
    const responseObject = await this._createResponseObject(connectionID);
    return responseObject;
  }
  
  async _createUser() {
    const connectionID = await usersCreator.create();
    return connectionID;
  }
  async _createResponseObject(connectionID) {
    const responseObject = await responseCreator.createResponse(ROOT_FILENAME);
    responseObject.setHeader('Set-Cookie', `connectionID=${connectionID}`);
    
    return responseObject;
  }
}

const rootRequest = new RootRequest();
module.exports = rootRequest;