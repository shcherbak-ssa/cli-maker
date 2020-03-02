'use strict';

class RepositoryWorker {
  async getUserData(accessID) {}
  async getProjects(accessID) {}
}

const repositoryWorker = new RepositoryWorker();
module.exports = repositoryWorker;