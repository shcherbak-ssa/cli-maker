'use strict';

const IProjectRepository = require('../i-project-repository');

class RepositoryWorker {
  async getUserData(accessID) {}
  async getProjects(accessID) {
    return await projectRepository.getProjects(accessID);
  }
}

const repositoryWorker = new RepositoryWorker();
module.exports = repositoryWorker;