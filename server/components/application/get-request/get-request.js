'use strict';

const urlParser = require('../request-parsers/url-parser');
const cookieParser = require('../request-parsers/cookie-parser');

class GetRequestWorker {
  async run(request, response) {
    const parsedURL = urlParser.parse(request.url);
    console.log('cookie: ', request.headers.cookie);
    console.log('pathname: ', parsedURL.getPathname());
    response.end('Hello, I am CLI Maker!');
  }
}

module.exports = GetRequestWorker;