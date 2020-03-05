'use strict';

const implementProjectRepository = require('./repository/project-repository-impl');

function initProjectComponent() {
  implementProjectRepository();
}

module.exports = initProjectComponent;