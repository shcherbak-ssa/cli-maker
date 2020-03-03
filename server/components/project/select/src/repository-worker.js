'use strict';

class RepositoryWorker {
  async getCommands(accessID) {
    return ['command1', 'command2'];
  }
}

const repositoryWorker = new RepositoryWorker();
module.exports = repositoryWorker;