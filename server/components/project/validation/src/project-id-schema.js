'use strict';

const {
  PROJECT_ID_TYPE,
  MAX_PROJECT_ID_LENGTH,
  PROJECT_ID_PATTERN
} = require('../../rules/project-id-rules');

const projectIDSchema = [
  {
    op: 'add',
    path: '/required',
    value: 'id'
  },
  {
    op: 'add',
    path: '/properties/id',
    value: {
      type: PROJECT_ID_TYPE,
      maxLength: MAX_PROJECT_ID_LENGTH,
      pattern: PROJECT_ID_PATTERN
    }
  },
  {
    op: 'add',
    path: '/errorMessage/required',
    value: {
      id: 'cannot find the id field'
    }
  }
];

module.exports = projectIDSchema;