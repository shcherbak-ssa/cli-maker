'use strict';

const projectNameSchema = require('./src/project-name-schema');
const projectIDSchema = require('./src/project-id-schema');

const renameProjectSchema = {
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

module.exports = renameProjectSchema;