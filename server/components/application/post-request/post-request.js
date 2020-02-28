'use strict';

const cookieParser = require('../parsers/cookie-parser');

const usersController = require('../../user/users/users-controller');
const appEventsEmitter = require('../data/app-events-emitter');

appEventsEmitter.on('test-request', (parsedRequest, response) => {
  const accessID = parsedRequest.getAccessID();
  const data = parsedRequest.getData();

  response.writeHead(200, {headers: {'Content-Type': 'application/json'}});
  response.end(JSON.stringify({accessID, data}));
});

class PostRequest {
  async run(request, response) {
    try {
      await this._tryToRun(request, response);
    } catch (error) {
      console.log(error);
      response.end();
    }
  }

  async _tryToRun(request, response) {
    const connectionID = cookieParser.getConnectionID(request.headers);
    const isValidUser = usersController.checkUser(connectionID);

    if(isValidUser) {
      const event = request.url.slice(1);
      const parsedRequest = {};
      appEventsEmitter.emit(event, parsedRequest, response);
    }
  }
}

const postRequest = new PostRequest();
module.exports = postRequest;