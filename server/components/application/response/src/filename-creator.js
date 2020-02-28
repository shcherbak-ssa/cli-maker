'use strict';

const {join} = require('path');
const getFileExtension = require('./file-extension');
const {BadRequestError} = require('../../errors/request-errors');

const PUBLIC_PATH = join(process.cwd(), 'public');

class FilenameCreator {
  createFilename(pathname) {
    const fileExtension = getFileExtension(pathname);
    const filenameCreator = this._getCreatorByFileExtension(fileExtension);

    return filenameCreator(pathname);
  }

  _getCreatorByFileExtension(fileExtension) {
    switch(fileExtension) {
      case '.html':
        return this._createHTMLFilepath;
      case '.ico':
        return this._createImageFilepath;
      case '.js':
        return this._createJSFilepath;
      default:
        throw new BadRequestError(`file extension ${fileExtension} is invalid`);
    }
  }

  _createHTMLFilepath(pathname) {
    return join(PUBLIC_PATH, 'html', pathname);
  }
  _createJSFilepath(pathname) {
    const splitPathname = pathname.split('/');
    return join(PUBLIC_PATH, 'js', ...splitPathname);
  }
  _createImageFilepath(pathname) {
    return join(PUBLIC_PATH, 'assets', 'images', pathname);
  }
}

const filenameCreator = new FilenameCreator();
module.exports = filenameCreator;