'use strict';

const AJV = require('ajv');
const ajv = new AJV();

const ValidationError = require('./validation-error');

function compileAndValidate(schema, object) {
  console.log('schema: ', schema);
  console.log('object: ', object);
  const validate = ajv.compile(schema);
  console.log('validate: ', validate);
  const isValid = validate(object);
  console.log('isValid: ', isValid);
  if( !isValid ) throw new ValidationError('invalid data', validate.errors);
}

module.exports = compileAndValidate;