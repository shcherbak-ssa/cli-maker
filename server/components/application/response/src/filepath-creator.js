'use strict';

const {join} = require('path');
const getFileExtension = require('./file-extension');

const PUBLIC_PATH = join(process.cwd(), 'public');

class FilepathCreator {
  create(pathname) {
    const fileExtension = getFileExtension(pathname);
    const filepathCreator = this._getCreatorByFileExtension(fileExtension);
    return filepathCreator(pathname);
  }

  _getCreatorByFileExtension(fileExtension) {
    switch(fileExtension) {
      case '.html':
        return this._createHTMLFilepath;
      case '.ico':
        return this._createImageFilepath;
    }
  }

  _createHTMLFilepath(pathname) {
    return join(PUBLIC_PATH, pathname);
  }
  _createJSFilepath(pathname) {
    const splitPathname = pathname.split('/');
    return join(PUBLIC_PATH, 'js', ...splitPathname);
  }
  _createImageFilepath(pathname) {
    return join(PUBLIC_PATH, 'assets', 'images', pathname);
  }
}

const filepathCreator = new FilepathCreator();
module.exports = filepathCreator;