'use strict';

const IRenameProjectRepository = require('../i-rename-project-repository');

class RenameProjectRepository {
  async updateRepository(accessID, projectData) {
    return await IRenameProjectRepository.renameProject(accessID, projectData);
  }
}

module.exports = RenameProjectRepository;
