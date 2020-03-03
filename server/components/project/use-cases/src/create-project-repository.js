'use strict';

const ICreateProjectRepository = require('../interfaces/i-create-project-repository');

class CreateProjectRepository {
  async updateRepository(accessID, projectData) {
    return await ICreateProjectRepository.createProject(accessID, projectData);
  }
}

module.exports = CreateProjectRepository;
