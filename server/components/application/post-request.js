'use strict';

const cookieParser = require('./parsers/cookie-parser');
const requestBodyParser = require('./parsers/request-body-parser');
const urlParser = require('./parsers/url-parser');

const usersController = require('../user/users/users-controller');
const appEventsEmitter = require('./data/app-events-emitter');
const responseSender = require('./response/response-sender');

const bodyValidation = require('./validation/body-validation');

class PostRequest {
  async run(request, response) {
    try {
      await this._tryToRun(request, response);
    } catch (error) {
      console.log(error);
      response.end();
      //await responseSender.sendError(error, response);
    }
  }

  async _tryToRun(request, response) {
    const connectionID = cookieParser.getConnectionID(request.headers);
    const isValidUser = usersController.checkUser(connectionID);

    if( isValidUser ) {
      const {entity, event, body} = await this._parseRequest(request);
      await bodyValidation.validate(entity, body);

      const requestBody = await requestBodyParser.createRequestBody(body);
      const eventName = this._createEventName(entity, event);

      console.log('eventName: ', eventName);
      console.log('requestBody: ', requestBody);

      response.end();

      //appEventsEmitter.emit(eventName, requestBody, (responseObject) => {
       // response.end();
      //})
    }
  }
  async _parseRequest(request) {
    const parsedURL = urlParser.parse(request.url);
    const [entity, event] = parsedURL.parsePathname();
    const body = await requestBodyParser.parse(request);
    return {entity, event, body};
  }

  _createEventName(entity, event) {
    return `${event}-${entity}`;
  }
}

const postRequest = new PostRequest();
module.exports = postRequest;