'use strict';

let publicFilesConfig = {
  '^\/$': {
    headers: {
      'Content-Type': 'text/html'
    },
    paths: ['html', 'index.html']
  },
  '\.js$': {
    headers: {
      'Content-Type': 'application/javascript'
    },
    paths: ['js']
  },
  '\.ico$': {
    headers: {
      'Content-Type': 'image/x-icon'
    },
    paths: ['assets', 'images']
  }
};

publicFilesConfig = Object.entries(publicFilesConfig);
publicFilesConfig = new Map(publicFilesConfig);

module.exports = publicFilesConfig;