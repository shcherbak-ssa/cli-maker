'use strict';

const IProjectRepository = require('../i-project-repository');

class ProjectRepository {
  async getProjects(accessID) {
    return await IProjectRepository.getProjects(accessID);
  }
};

module.exports = ProjectRepository;