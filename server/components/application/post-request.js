'use strict';

const cookieParser = require('./parsers/cookie-parser');
const requestBodyParser = require('./parsers/request-body-parser');
const urlParser = require('./parsers/url-parser');

const usersController = require('../user/users/users-controller');
const appEventsEmitter = require('./data/app-events-emitter');
const responseCreator = require('./response/response-creator');
const responseSender = require('./response/response-sender');

const bodyValidation = require('./validation/body-validation');
const {InvalidUserError} = require('./errors/post-request-errors');

class PostRequest {
  async run(request, response) {
    try {
      await this._tryToRun(request, response);
    } catch (error) {
      console.log(error);
      await responseSender.sendError(error, response);
    }
  }

  async _tryToRun(request, response) {
    const connectionID = cookieParser.getConnectionID(request.headers);
    const isValidUser = usersController.checkUser(connectionID);

    if( isValidUser ) await this._doValidUserAction(request, response);
    else throw new InvalidUserError();
  }
  async _doValidUserAction(request, response) {
    const {parsedPathname, body} = await this._parseRequest(request);
    await bodyValidation.validate(parsedPathname.entity, body);

    const requestBody = await requestBodyParser.createRequestBody(body);
    const {event} = parsedPathname;

    appEventsEmitter.emit(event, requestBody, this._getResponseCallback(response));
  }
  async _parseRequest(request) {
    const parsedURL = urlParser.parse(request.url);
    const parsedPathname = parsedURL.parsePathname();
    const body = await requestBodyParser.parse(request);
    return {parsedPathname, body};
  }
  _getResponseCallback(response) {
    return async (entityResponse) => {
      const jsonResponse = await responseCreator.createJSONResponse(entityResponse);
      await responseSender.send(jsonResponse, response);
    }
  }
}

const postRequest = new PostRequest();
module.exports = postRequest;