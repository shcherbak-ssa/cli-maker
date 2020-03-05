'use strict';

const EntityResponseCreator = require('./entity-response');

function createSuccessEntityResponse(data) {
  const creator = new EntityResponseCreator();
    return creator
      .setData(data)
      .getResponse();
}

module.exports = createSuccessEntityResponse;