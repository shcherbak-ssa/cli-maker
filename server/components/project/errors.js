'use strict';

const projectResponseWorker = require('./data/project-response-worker');

function createErrorResponse(type, message) {
  return projectResponseWorker.createErrorResponse(type, message);
}

class ProjectError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ProjectError';
  }
}

class ProjectServerError extends ProjectError {
  constructor(message) {
    super(message);
    this.projectResponse = createErrorResponse('Server error', message);
  }
}

module.exports = {
  ProjectServerError
};