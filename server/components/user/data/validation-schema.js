'use strict';

const validationSchema = {
  type: 'object',
  required: ['name', 'userID'],
  properties: {
    name: {
      type: 'string'
    },
    userID: {
      type: 'string'
    }
  }
};

module.exports = validationSchema;