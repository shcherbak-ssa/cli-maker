'use strict';

const bodySchema = {
  type: 'object',
  required: ['accessID', 'data'],
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