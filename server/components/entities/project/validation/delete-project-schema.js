'use strict';

const projectIDSchema = require('./src/project-id-schema');

const delteProjectSchema = {
  $patch: {
    source: {
      type: 'object',
      required: ['id'],
      properties: {},
      additionalProperties: false,
      errorMessage: {
        additionalProperties: 'should not have properties other than \'id\''
      }
    },
    with: [
      ...projectIDSchema,
    ]
  }
};

module.exports = delteProjectSchema;