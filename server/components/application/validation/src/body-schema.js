'use strict';

const bodySchema = {
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