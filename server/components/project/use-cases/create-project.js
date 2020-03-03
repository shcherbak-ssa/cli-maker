'use strict';

const ProjectUseCase = require('./src/project-use-case');
const CreateProjectRules = require('../rules/create-project-rules');
const CreateProjectRepository = require('./src/create-project-repository');

class CreateProject extends ProjectUseCase {
  constructor() {
    super(
      'create',
      new CreateProjectRules(),
      new CreateProjectRepository()
    );
  }
}

const createProject = new CreateProject();
module.exports = createProject;