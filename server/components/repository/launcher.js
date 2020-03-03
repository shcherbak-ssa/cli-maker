'use strict';

const implementUserRepository = require('./user-repository-impl');
const implementProjectRepository = require('./project-repository-impl');
const implementProjectUseCasesRepositories = require('./project-use-case-repository-impl');

function initRepositoryComponent() {
  implementUserRepository();
  implementProjectRepository();
  implementProjectUseCasesRepositories();
}

module.exports = initRepositoryComponent;