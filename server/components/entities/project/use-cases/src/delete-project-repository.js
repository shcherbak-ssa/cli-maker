'use strict';

const IDeleteProjectRepository = require('../interfaces/i-delete-project-repository');

class DeleteProjectRepository {
  async updateRepository(accessID, projectData) {
    return await IDeleteProjectRepository.deleteProject(accessID, projectData);
  }
}

module.exports = DeleteProjectRepository;
