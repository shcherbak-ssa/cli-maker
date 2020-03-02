'use strict';

const AJV = require('ajv');
const ajv = new AJV();

const {ValidationError} = require('../../errors/post-request-errors');

function compileAndValidate(schema, object) {
  const validate = ajv.compile(schema);
  const isValid = validate(object);

  if( !isValid ) throw new ValidationError(validate.errors[0].message);
}

module.exports = compileAndValidate;