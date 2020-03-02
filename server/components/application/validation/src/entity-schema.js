'use strict';

const {ValidationError} = require('../../errors/post-request-errors');

const userValidationSchema = require('../../../user/data/validation-schema');
const projectValidationSchema = require('../../../project/data/validation-schema');

const schemas = {
  user: userValidationSchema,
  project: projectValidationSchema
};

function getEntitySchema(entity) {
  if( entity in schemas ) return schemas[entity];
  else throw new ValidationError(`Unknown entity name: ${entity}`);
}

module.exports = getEntitySchema;