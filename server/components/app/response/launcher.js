'use strict';

const implementErrorResponses = require('./entity/error-response-impl');
const implementSuccessResponses = require('./entity/success-response-impl');

function initResponseComponent() {
  implementErrorResponses();
  implementSuccessResponses();
}

module.exports = initResponseComponent;