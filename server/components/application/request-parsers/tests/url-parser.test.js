'use strict';

const assert = require('assert');
const urlParser = require('../url-parser');

describe('test URLParser class', () => {
  describe('test pathname value', () => {
    const testData = [
      { test: '/', expect: '/' },
      { test: '/filename.js', expect: '/filename.js' },
      { test: '/dirname/filename.js', expect: '/dirname/filename.js' }
    ];

    testData.map((testItem) => {
      it(`parse url = \'${testItem.test}\'`, () => {
        const url = testItem.test;
        const parsedURL = urlParser.parse(url);
        
        assert.equal(parsedURL.getPathname(), testItem.expect);
      });
    })
  });

  describe('test params value', () => {
    const testData = [
      { test: '/?id=1234567890', expect: [{key: 'id', value: '1234567890'}] },
      { test: '/?remove=true', expect: [{key: 'remove', value: 'true'}] },
      { test: '/?id=123&name=Stas',
        expect: [
          {key: 'id', value: '123'},
          {key: 'name', value: 'Stas'}
        ] 
      }
    ];

    testData.map((testItem) => {
      it(`parse url = \'${testItem.test}\'`, () => {
        const url = testItem.test;
        const parsedURL = urlParser.parse(url);
        
        const {expect} = testItem;
        expect.map((item) => {
          assert.equal(parsedURL.getParamItem(item.key), item.value);
        })
      });
    })
  });

  describe('full test', () => {
    it('parse url = \'/filename.js?lang=ru\'', () => {
      const url = '/filename.js?lang=ru';
      const parsedURL = urlParser.parse(url);

      assert.equal(parsedURL.getPathname(), '/filename.js');
      assert.equal(parsedURL.getParamItem('lang'), 'ru');
    });

    it('parse url = \'/dirname/filename.js?module=connection&lang=en&save=false\'', () => {
      const url = '/dirname/filename.js?module=connection&lang=en&save=false';
      const parsedURL = urlParser.parse(url);

      assert.equal(parsedURL.getPathname(), '/dirname/filename.js');
      assert.equal(parsedURL.getParamItem('module'), 'connection');
      assert.equal(parsedURL.getParamItem('lang'), 'en');
      assert.equal(parsedURL.getParamItem('save'), 'false');
    })
  })
});