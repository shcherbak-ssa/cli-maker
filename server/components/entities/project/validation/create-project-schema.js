'use strict';

const projectNameSchema = require('./src/project-name-schema');

const createProjectSchema = {
  $patch: {
    source: {
      type: 'object',
      required: ['name'],
      properties: {},
      additionalProperties: false,
      errorMessage: {
        additionalProperties: 'should not have properties other than \'id\''
      }
    },
    with: [
      ...projectNameSchema
    ]
  }
};

module.exports = createProjectSchema;