'use strict';

const selectUser = require('./src/select-user');

async function selectUserEventHandler(workingData) {
  return await selectUser.handler(workingData);
}

module.exports = selectUserEventHandler;