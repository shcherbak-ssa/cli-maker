'use strict';

const projectRules = require('./project-rules');

const projectNameSchema = {
  required: ['name'],
  properties: {
    name: {
      type: 'string',
      maxLength: projectRules.maxProjectNameLength,
      pattern: projectRules.validSymbols
    }
  },
  errorMessage: {
    require: {
      name: 'didn\'t find the name field'
    },
    properties: {
      name: `project name cannot exceed ${projectRules.maxProjectNameLength} characters`
    }
  }
};