'use strict';

const {join} = require('path');
const PUBLIC_PATH = join(process.cwd(), 'public');

let publicFilesConfig = {
  '^\/$': {
    headers: {
      'Content-Type': 'text/html'
    },
    path: [PUBLIC_PATH, 'html', 'index.html']
  },
  '\.js$': {
    headers: {
      'Content-Type': 'application/javascript'
    },
    path: [PUBLIC_PATH, 'js']
  },
  '\.ico$': {
    headers: {
      'Content-Type': 'image/x-icon'
    },
    path: [PUBLIC_PATH, 'assets, images']
  }
};

publicFilesConfig = Object.entries(publicFilesConfig);
publicFilesConfig = new Map(publicFilesConfig);
module.exports = publicFilesConfig;