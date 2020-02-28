'use strict';

const formidable = require('formidable');

class RequestParser {
  async parse(request) {
    await this._getData(request);
  }

  async _getData(request) {
    const form = formidable();
    form.parse(request, (err, fields, files) => {
      if( err ) return console.log(err);

      console.log(fields);
      console.log(files);
    });
  }
}

const requestParser = new RequestParser();
module.exports = requestParser;