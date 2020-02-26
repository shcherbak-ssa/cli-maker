'use strict';

const assert = require('assert');
const urlParser = {
  parse(url) {
    return {path: ''};
  }
};

describe('URLParser class test', () => {
  it('parse url = \'/\'', () => {
    const url = '/';
    const parsedURL = urlParser.parse(url);
    
    assert.equal(parsedURL.path, '/');
  });

  it('parse url = \'/filename.js\'', () => {
    const url = '/filename.js';
    const parsedURL = urlParser.parse(url);
    
    assert.equal(parsedURL.path, '/filename.js');
  });

  it('parse url = \'/dirname/filename.js\'', () => {
    const url = '/dirname/filename.js';
    const parsedURL = urlParser.parse(url);
    
    assert.equal(parsedURL.path, '/dirname/filename.js');
  });
});