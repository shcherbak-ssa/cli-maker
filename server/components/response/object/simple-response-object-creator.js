'use strict';

const {SimpleResponseCreator} = require('./src/simple-response');

class SimpleResponseObjectCreator {
  async create(statusCode) {
    const creator = new SimpleResponseCreator();
    return creator
      .setStatusCodeAndMessage(statusCode)
      .getResponseData();
  }
}

const simpleResponseObjectCreator = new SimpleResponseObjectCreator();
module.exports = simpleResponseObjectCreator;