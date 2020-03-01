'use strict';

const validationSchema = {
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