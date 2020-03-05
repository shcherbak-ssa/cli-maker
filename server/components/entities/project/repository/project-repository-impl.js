'use strict';

const IProjectRepository = require('../../user/select/i-project-repository');
const ProjectRepository = require('./src/project-repository');

/** Implementation */
function implementProjectRepository() {
  const projectRepository = new ProjectRepository();
  IProjectRepository.getProjects = projectRepository.getProjects;
}

module.exports = implementProjectRepository;