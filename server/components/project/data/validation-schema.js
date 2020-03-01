'use strict';

const validationSchema = {
  properties: {
    name: {
      type: 'string'
    },
    projectID: {
      type: 'string'
    }
  }
};

module.exports = validationSchema;