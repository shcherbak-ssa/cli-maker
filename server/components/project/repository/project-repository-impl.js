'use strict';

const IProjectRepository = require('../../user/select/i-project-repository');
const projectRepository = require('./src/project-repository');

/** Implementation */
function implementProjectRepository() {
  IProjectRepository.getProjects = projectRepository.getProjects;
}

module.exports = implementProjectRepository;