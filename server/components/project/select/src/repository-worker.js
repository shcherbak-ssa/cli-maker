'use strict';

/** Stub (should be remove) */
const commandsDB = require('../../../../../db/commands.json');
const {ProjectDoesNotExist} = require('../../errors');

class RepositoryWorker {
  async getCommands(accessID) {
    if( accessID in commandsDB ) return commandsDB[accessID];
    else {
      const [, projectID] = accessID.split('/');
      throw new ProjectDoesNotExist(`project with id ${projectID} doesn't exist`);
    }
  }
}

const repositoryWorker = new RepositoryWorker();
module.exports = repositoryWorker;