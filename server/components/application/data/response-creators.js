'use strict';

const {SimpleResponseCreator} = require('./src/simple-response');
const FileResponseCreator = require('./src/file-response');
const JSONResponseCreator = require('./src/json-response');

module.exports = {
  SimpleResponseCreator,
  FileResponseCreator,
  JSONResponseCreator
};