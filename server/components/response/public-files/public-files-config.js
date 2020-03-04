'use strict';

const {
  ROOT_PATH,
  JS_PUBLIC_PATH,
  IMAGES_PUBLIC_PATH
} = require('../../../utils/public-paths');

let publicFilesConfig = {
  '^\/$': {
    headers: {
      'Content-Type': 'text/html'
    },
    publicPath: ROOT_PATH
  },
  '\.js$': {
    headers: {
      'Content-Type': 'application/javascript'
    },
    publicPath: JS_PUBLIC_PATH
  },
  '\.ico$': {
    headers: {
      'Content-Type': 'image/x-icon'
    },
    publicPath: IMAGES_PUBLIC_PATH
  }
};

publicFilesConfig = Object.entries(publicFilesConfig);
publicFilesConfig = new Map(publicFilesConfig);

module.exports = publicFilesConfig;