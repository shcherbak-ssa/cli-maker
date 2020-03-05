'use strict';

const appEventsEmitter = require('../../application/data/app-events-emitter');
const workingDataCreator = require('./src/working-data-creator');
const selectUser = require('../../user/select/select-user');

class UserEvents {
  initUserEvents() {
    appEventsEmitter
      .on('select-user', this._selectUserEventHandler);
  }
  async _selectUserEventHandler(requestBody, responseCallback) {
    const workingData = workingDataCreator.createSelectUserWorkingData(requestBody);
    const userResponse = await selectUser.handler(workingData);
    await responseCallback(userResponse);
  }
}

const userEvents = new UserEvents();
module.exports = userEvents;