'use strict';

class CookieParser {
  getConnectionID(headers) {
    if( headers.cookie === undefined ) return '';

    const cookie = this._getCookie(headers);
    return (cookie === '') ? '' : this._getConnecionID(cookie);
  }

  _getCookie(headers) {
    let cookie = headers.cookie;
    cookie = cookie.split(';').map((item) => item.split('='));
    return new Map(cookie);
  }
  _getConnecionID(cookie) {
    return cookie.get('connectionID');
  }
}

const cookieParser = new CookieParser();
module.exports = cookieParser;