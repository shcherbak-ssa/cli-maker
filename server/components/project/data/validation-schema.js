'use strict';

const validationSchema = {
  type: 'object',
  required: ['name', 'projectID'],
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