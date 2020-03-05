'use strict';

const ProjectUseCase = require('./src/project-use-case');
const RenameProjectRules = require('../rules/rename-project-rules');
const RenameProjectRepository = require('./src/rename-project-repository');

class RenameProject extends ProjectUseCase {
  constructor() {
    super(
      'rename',
      new RenameProjectRules(),
      new RenameProjectRepository()
    );
  }
}

const renameProject = new RenameProject();
module.exports = renameProject;