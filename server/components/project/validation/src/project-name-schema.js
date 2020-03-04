'use strict';

const {
  PROJECT_NAME_TYPE,
  MAX_PROJECT_NAME_LENGTH,
  PROJECT_NAME_PATTERN
} = require('../../rules/project-name-rules');

const projectNameSchema = [
  {
    op: 'add',
    path: '/required',
    value: 'name'
  },
  {
    op: 'add',
    path: '/properties/name',
    value: {
      type: PROJECT_NAME_TYPE,
      maxLength: MAX_PROJECT_NAME_LENGTH,
      pattern: PROJECT_NAME_PATTERN
    }
  },
  {
    op: 'add',
    path: '/errorMessage/required',
    value: {
      name: 'cannot find the name field'
    }
  },
  {
    op: 'add',
    path: '/errorMessage/properties/name',
    value: `project name cannot exceed ${MAX_PROJECT_NAME_LENGTH} characters`
  }
];

module.exports = projectNameSchema;