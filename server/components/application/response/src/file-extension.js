'use strict';

const {extname} = require('path');

function getFileExtension(pathname) {
  return extname(pathname);
}

module.exports = getFileExtension;