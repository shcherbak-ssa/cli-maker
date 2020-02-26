'use strict';

const assert = require('assert');
const urlParser = require('../url-parser');

describe('test URLParser class', () => {
  describe('test path value', () => {
    const testData = [
      { test: '/', expect: '/' },
      { test: '/filename.js', expect: '/filename.js' },
      { test: '/dirname/filename.js', expect: '/dirname/filename.js' }
    ]

    testData.map((testItem) => {
      it(`parse url = \'${testItem.test}\'`, () => {
        const url = testItem.test;
        const parsedURL = urlParser.parse(url);
        
        assert.equal(parsedURL.path, testItem.expect);
      });
    })
  })
});