'use strict';

const bodySchema = require('./src/body-schema');
const getEntitySchema = require('./src/entity-schema');
const compileAndValidate = require('./src/compile-and-validate');

const {BadRequestError} = require('../errors/post-request-errors');
const {InternalSeverError} = require('../errors/request-errors');

class BodyValidation {
  async validate(entity, validateObject) {
    try {
      await this._tryToValidate(entity, validateObject);
    } catch (error) {
      console.log(error);
      
      if( error.name === 'ValidationError' ) {
        const {message} = error;
        throw new BadRequestError(message);
      } else {
        throw new InternalSeverError();
      }
    }
  }

  async _tryToValidate(entity, validateObject) {
    await this._validateBody(validateObject);
    await this._validateEntity(entity, validateObject.data);
  }
  async _validateBody(validateObject) {
    compileAndValidate(bodySchema, validateObject);
  }
  async _validateEntity(entity, data) {
    const entitySchema = getEntitySchema(entity);
    compileAndValidate(entitySchema, data);
  }
}

const bodyValidation = new BodyValidation();
module.exports = bodyValidation;