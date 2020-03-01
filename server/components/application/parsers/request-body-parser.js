'use strict';

const formidable = require('formidable');
const RequestBodyCreator = require('../data/request-body');

class RequestBodyParser {
  async parse(request) {
    const {fields} = await this._getData(request);
    return fields;
  }
  async createRequestBody(body) {
    const {accessID, data} = body;
    const requestBodyCreator = new RequestBodyCreator();

    requestBodyCreator
      .setAccessID(accessID)
      .setData(data);
    
    return requestBodyCreator.getRequestBody();
  }

  async _getData(request) {
    return new Promise((success, error) => {
      const form = formidable();
      form.parse(request, (err, fields, files) => {
        if( err ) return error(err);
        success({fields, files});
      });
    })
  }
}

const requestBodyParser = new RequestBodyParser();
module.exports = requestBodyParser;