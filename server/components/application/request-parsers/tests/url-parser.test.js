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
        
        assert.equal(parsedURL.getPath(), testItem.expect);
      });
    })
  })

  describe('test params value', () => {
    const testData = [
      { test: '/?id=1234567890', expect: {key: 'id', value: '1234567890'} }
    ]

    testData.map((testItem) => {
      it(`parse url = \'${testItem.test}\'`, () => {
        const url = testItem.test;
        const parsedURL = urlParser.parse(url);
        
        const {expect} = testItem;
        assert.equal(parsedURL.getParamItem(expect.key), expect.value);
      });
    })
  })
});