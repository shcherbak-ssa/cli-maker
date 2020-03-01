'use strict';

const AJV = require('ajv');
const ajv = new AJV();

const ValidationError = require('./validation-error');

function compileAndValidate(schema, object) {
  const compiled = ajv.compile(schema);
  const valid = compiled(object);
  if( !valid ) throw new ValidationError('invalid data', compiled.errors);
}

module.exports = compileAndValidate;