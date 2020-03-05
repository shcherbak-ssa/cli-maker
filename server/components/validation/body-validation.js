'use strict';

const bodySchema = require('./src/body-schema');
const getEntitySchema = require('./src/entity-schemas');
const compileAndValidate = require('./src/compile-and-validate');

const {InternalSeverError} = require('../errors/request-errors');

class BodyValidation {
  async validate(pathname, validateObject) {
    try {
      await this._tryToValidate(pathname, validateObject);
    } catch (error) {
      if( error.name === 'ValidationError' ) throw error;
      else throw new InternalSeverError();
    }
  }

  async _tryToValidate(pathname, validateObject) {
    await this._validateBody(validateObject);
    await this._validateEntityData(pathname, validateObject.data);
  }
  async _validateBody(validateObject) {
    compileAndValidate(bodySchema, validateObject);
  }
  async _validateEntityData(pathname, data) {
    const [entity, event] = pathname.split('/');
    const entitySchema = getEntitySchema(entity, event);
    compileAndValidate(entitySchema, data);
  }
}

const bodyValidation = new BodyValidation();
module.exports = bodyValidation;