'use strict';

const FS = require('fs');
const PATH = require('path');

const PUBLIC_PATH = PATH.join(process.cwd(), 'public');

class ResponseCreator {
  isValid(pathname) {
    const filename = this._createFilename(pathname);
    return FS.existsSync(filename);
  }
  createResponse(pathname) {
    const filename = this._createFilename(pathname);
    return {
      code: 200,
      headers: {},
      filename
    }
  }
  createErrorResponse(code) {
    return {};
  }

  _createFilename(pathname) {
    return PATH.join(PUBLIC_PATH, pathname)
  }
}

const responseCreator = new ResponseCreator();
module.exports = responseCreator;