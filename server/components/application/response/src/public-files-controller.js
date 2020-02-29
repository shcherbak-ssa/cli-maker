'use strict';

const {join} = require('path');
const PUBLIC_PATH = join(process.cwd(), 'public');
const publicFilesConfig = require('./public-files-config');
const {NotFoundError} = require('../../errors/request-errors');

class PublicFilesController {
  
  async getPublicFileConfig(pathname) {
    const publicFileKey = this._getPublicFileKey(pathname);
    const publicFileConfig = publicFilesConfig.get(publicFileKey);
    return this._transformPublicFileConfig(publicFileConfig, pathname);
  }

  _getPublicFileKey(pathname) {
    for( let key of publicFilesConfig.keys() ) {
      const regExp = new RegExp(key);
      if( regExp.test(pathname) ) return key;
    }
    throw new NotFoundError(`invalid pathname: ${pathname}`);
  }
  _transformPublicFileConfig(publicFileConfig, pathname) {
    const {headers, paths} = publicFileConfig;
    const filename = this._createFilename(paths, pathname);
    return {headers, filename};
  }
  _createFilename(paths, pathname) {
    return join(PUBLIC_PATH, ...paths, pathname.slice(1));
  }
}

const publicFilesController = new PublicFilesController();
module.exports = publicFilesController;