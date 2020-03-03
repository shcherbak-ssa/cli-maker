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
class ProjectDoesNotExist extends ProjectError {
  constructor(message) {
    super(message);
    this.projectResponse = createErrorResponse('Action error', message);
  }
}
class ProjectRulesError extends ProjectError {
  constructor(message) {
    super(message);
    this.projectResponse = createErrorResponse('Rules error', message);
  }
}

module.exports = {
  ProjectServerError,
  ProjectDoesNotExist,
  ProjectRulesError
};