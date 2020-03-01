'use strict';

const schemas = {};

function getEntitySchema(entity) {
  return schemas[entity];
}

module.exports = getEntitySchema;