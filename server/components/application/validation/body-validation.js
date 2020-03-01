'use strict';

const compileAndValidate = require('./src/compile-and-validate');
const bodySchema = require('./src/body-schema');
const getEntitySchema = require('./src/entity-schema');

class BodyValidation {
  async validate(entity, validateObject) {
    try {
      await this._tryToValidate(entity, validateObject);
    } catch (error) {
      console.log(error);
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