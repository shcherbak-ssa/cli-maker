'use strict';

const {
  PROJECT_ID_TYPE,
  MAX_PROJECT_ID_LENGTH,
  PROJECT_ID_PATTERN
} = require('../../rules/project-id-rules');

const projectIDSchema = {
  required: ['id'],
  properties: {
    id: {
      type: PROJECT_ID_TYPE,
      maxLength: MAX_PROJECT_ID_LENGTH,
      pattern: PROJECT_ID_PATTERN
    }
  },
  errorMessage: {
    require: {
      id: 'cannot find the id field'
    }
  }
};

module.exports = projectIDSchema;