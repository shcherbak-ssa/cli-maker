'use strict';

const projectsDB = require('../../../db/projects.json');
const IProjectRepository = require('../project/repository/i-project-repository');

class ProjectRepositoryImpl {
  async getProjects(accessID) {
    return projectsDB[accessID];
  }
}

function implementProjectRepository() {
  const projectRepositoryImpl = new ProjectRepositoryImpl();
  IProjectRepository.getProjects = projectRepositoryImpl.getProjects;
}

module.exports = implementProjectRepository;