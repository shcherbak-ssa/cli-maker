'use strict';

const userValidationSchema = require('../../../user/data/validation-schema');
const projectValidationSchema = require('../../../project/data/validation-schema');

const schemas = {
  user: userValidationSchema,
  project: projectValidationSchema
};

function getEntitySchema(entity) {
  return schemas[entity];
}

module.exports = getEntitySchema;