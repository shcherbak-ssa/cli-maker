'use strict';

const FS = require('fs');
const PATH = require('path');

class ResponseCreator {
  PUBLIC_PATH = PATH.join(process.cwd(), 'public');

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
    return PATH.join(this.PUBLIC_PATH, pathname)
  }
}