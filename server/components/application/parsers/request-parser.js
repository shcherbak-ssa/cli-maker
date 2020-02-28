'use strict';

const formidable = require('formidable');
const ParsedRequestCreator = require('../data/parsed-request');

class RequestParser {
  async parse(request) {
    try {
      return await this._tryToParse(request);
    } catch (error) {
      console.log(error);
    }
  }

  async _tryToParse(request) {
    const {fields} = await this._getData(request);
    const {accessID, data} = fields;
    const parsedRequestCreator = new ParsedRequestCreator();
    
    parsedRequestCreator.setAccessID(accessID);
    parsedRequestCreator.setData(data);
    return parsedRequestCreator.getParsedRequest();
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

const requestParser = new RequestParser();
module.exports = requestParser;