'use strict';

const projectNameSchema = require('./src/project-name-schema');
const projectIDSchema = require('./src/project-id-schema');

const renameProjectSchema = {
  $patch: {
    source: {
      type: 'object',
      required: ['name', 'id'],
      properties: {},
      additionalProperties: false,
      errorMessage: {
        additionalProperties: 'should not have properties other than \'name\' and \'id\''
      }
    },
    with: [
      ...projectIDSchema,
      ...projectNameSchema
    ]
  }
};

module.exports = renameProjectSchema;