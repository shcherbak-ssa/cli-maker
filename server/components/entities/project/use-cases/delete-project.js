'use strict';

const ProjectUseCase = require('./src/project-use-case');
const DeleteProjectRepository = require('./src/delete-project-repository');

class DeleteProject extends ProjectUseCase {
  constructor() {
    super('delete', {}, new DeleteProjectRepository());
  }

  async _checkForComplianceRules() {
    return null;
  }
}

const deleteProject = new DeleteProject();
module.exports = deleteProject;