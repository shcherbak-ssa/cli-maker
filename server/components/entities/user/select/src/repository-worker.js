'use strict';

const userRepository = require('../../repository/user-repository');
const IProjectRepository = require('../i-project-repository');

class RepositoryWorker {
  async getUserData(accessID) {
    return await userRepository.getUserData(accessID);
  }
  async getProjects(accessID) {
    return await IProjectRepository.getProjects(accessID);
  }
}

const repositoryWorker = new RepositoryWorker();
module.exports = repositoryWorker;