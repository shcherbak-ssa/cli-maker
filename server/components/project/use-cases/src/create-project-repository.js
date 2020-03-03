'use strict';

const ICreateProjectRepository = require('../i-create-project-repository');

class CreateProjectRepository {
  async updateRepository(accessID, projectData) {
    return await ICreateProjectRepository.createProject(accessID, projectData);
  }
}

module.exports = CreateProjectRepository;
