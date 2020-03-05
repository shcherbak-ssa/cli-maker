'use strict';

const {ValidationError} = require('../../errors/post-request-errors');

const userValidationSchemas = require('../../../user/data/validation-schemas');
const projectValidationSchemas = require('../../../project/data/validation-schemas');

const schemas = {
  user: userValidationSchemas,
  project: projectValidationSchemas
};

function getEntitySchema(entity, eventName) {
  if( entity in schemas ) {
    const entitySchemas = schemas[entity];
    if( eventName in entitySchemas ) return entitySchemas[eventName];
    else throw new ValidationError(`Unknown event name: ${eventName}`);
  } else throw new ValidationError(`Unknown entity name: ${entity}`);
}

module.exports = getEntitySchema;