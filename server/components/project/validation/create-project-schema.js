'use strict';

const projectIDSchema = require('./src/project-id-schema');

const createProjectSchema = {
  $merge: {
    source: {
      type: 'object',
      properties: {},
      additionalProperties: false,
      errorMessage: {
        additionalProperties: 'should not have properties other than \'id\''
      }
    },
    with: {
      ...projectIDSchema
    }
  }
};

module.exports = createProjectSchema;