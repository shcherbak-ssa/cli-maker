'use strict';

const IDeleteProjectRepository = require('../i-delete-project-repository');

class DeleteProjectRepository {
  async updateRepository(accessID, projectData) {
    return await IDeleteProjectRepository.deleteProject(accessID, projectData);
  }
}

module.exports = DeleteProjectRepository;
