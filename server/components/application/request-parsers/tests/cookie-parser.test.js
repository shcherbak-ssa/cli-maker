'use strict';

const assert = require('assert');
const cookieParser = {};

describe('CookieParser class test', () => {
  it('empty cookie', () => {
    const request = { headers: { cookie: '' } };
    const connectionID = cookieParser.getConnectionID(request.headers);

    assert.equal(connectionID, '');
  });

  it('cookie with connectionID name', () => {
    const request = { headers: { cookie: 'connectionID=1234567890' } };
    const connectionID = cookieParser.getConnectionID(request.headers);

    assert.equal(connectionID, '1234567890');
  });
});