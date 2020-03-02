'use strict';

const implementUserRepository = require('./user-repository-impl');
const implementProjectRepository = require('./project-repository-impl');

function initRepositoryComponent() {
  implementUserRepository();
  implementProjectRepository();
}

module.exports = initRepositoryComponent;