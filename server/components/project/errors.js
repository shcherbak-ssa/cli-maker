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
    this.projectResponse = createErrorResponse('server', message);
  }
}
class ProjectDoesNotExist extends ProjectError {
  constructor(message) {
    super(message);
    this.projectResponse = createErrorResponse('action', message);
  }
}
class ProjectRulesError extends ProjectError {
  constructor(message) {
    super(message);
    this.projectResponse = createErrorResponse('rule', message);
  }
}
class ProjectUseCaseError extends ProjectError {
  constructor(message) {
    super(message);
    this.projectResponse = createErrorResponse('use-case', message);
  }
}

module.exports = {
  ProjectServerError,
  ProjectDoesNotExist,
  ProjectRulesError,
  ProjectUseCaseError
};