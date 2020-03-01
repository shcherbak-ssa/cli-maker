'use strict';

const bodySchema = {
  type: 'object',
  properties: {
    accessID: {
      type: 'string'
    },
    data: {
      type: 'object'
    }
  }
};

module.exports = bodySchema;