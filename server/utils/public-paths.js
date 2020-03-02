'use strict';

const {join} = require('path');

const PUBLIC_PATH = join(process.cwd(), 'public');
const ROOT_PATH = join(PUBLIC_PATH, 'html', 'index.html');
const JS_PUBLIC_PATH = join(PUBLIC_PATH, 'js');
const IMAGES_PUBLIC_PATH = join(PUBLIC_PATH, 'assets', 'images');

module.exports = {
  PUBLIC_PATH,
  ROOT_PATH,
  JS_PUBLIC_PATH,
  IMAGES_PUBLIC_PATH
}