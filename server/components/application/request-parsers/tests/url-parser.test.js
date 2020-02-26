'use strict';

const mocha = require('mocha');
const assert = require('assert');

describe('URLParser class test', () => {
  it('parse url = \'/\'. Expect result: \'/1\'', () => {
    const url = '/';
    
    url += '1';

    assert.equal(url, '/1');
  })
})