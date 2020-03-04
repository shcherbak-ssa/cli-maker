'use strict';

const {
  PROJECT_NAME_TYPE,
  MAX_PROJECT_NAME_LENGTH,
  PROJECT_NAME_PATTERN
} = require('../../rules/project-name-rules');

const projectNameSchema = {
  require: ['name'],
  properties: {
    name: {
      type: PROJECT_NAME_TYPE,
      maxLength: MAX_PROJECT_NAME_LENGTH,
      pattern: PROJECT_NAME_PATTERN
    }
  },
  errorMessage: {
    require: {
      name: 'cannot find the name field'
    },
    properties: {
      name: `project name cannot exceed ${MAX_PROJECT_NAME_LENGTH} characters`
    }
  }
};

module.exports = projectNameSchema;