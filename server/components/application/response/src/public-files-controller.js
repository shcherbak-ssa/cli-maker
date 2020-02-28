'use strict';

const {existsSync} = require('fs');
const {join} = require('path');

const config = require('./public-files-config');
const keys = config.keys();

class PublicFilesController {
  
  getFilename(pathname) {
    for( let key of this.keys ) {
      const regExp = new RegExp(key);
      if( regExp.test(pathname) ) {
        const fileObject = this._getFileObject(key);

      }
    }
  }
  createFilename(paths, pathname) {
    return join(...paths, pathname);
  }
  isFileExist(filename) {
    return existsSync(filename);
  }

  _getFileObjectKey() {}
  _getFileObject(key) {
    return config.get(key);
  }
}

const publicFilesController = new PublicFilesController();
module.exports = publicFilesController;