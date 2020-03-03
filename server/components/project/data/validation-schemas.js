'use strict';

const nameFieldSchema = {
  type: 'string',
  maxLength: 24
};
const idFieldSchema = {
  type: 'string',
  maxLength: 30
};

const validationSchemas = {
  'select': {
    type: 'object',
  },
  'create': {
    type: 'object',
    required: ['name'],
    properties: {
      name: nameFieldSchema,
    }
  },
  'rename': {
    type: 'object',
    required: ['name', 'id'],
    properties: {
      name: nameFieldSchema,
      id: idFieldSchema
    }
  },
  'delete': {
    type: 'object',
    required: ['id'],
    properties: {
      id: idFieldSchema
    }
  }
};

module.exports = validationSchemas;