'use strict';

const ProjectResponseCreator = require('./src/project-response');

class ProjectResponseWorker {
  createErrorResponse(type, message) {
    const creator = new ProjectResponseCreator();
    return creator
      .setErrorFlag(true)
      .setType(type)
      .setMessage(message)
      .getResponse();
  }
  createSuccessResponse(data) {
    const creator = new ProjectResponseCreator();
    return creator
      .setData(data)
      .getResponse();
  }
}

const projectResponseWorker = new ProjectResponseWorker();
module.exports = projectResponseWorker;