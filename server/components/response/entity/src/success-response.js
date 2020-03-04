'use strict';

const EntityResponseCreator = require('./entity-response');

function createSuccessResponse(data) {
  const creator = new EntityResponseCreator();
    return creator
      .setData(data)
      .getResponse();
}

module.exports = createSuccessResponse;