'use strict';

const appEventsEmitter = require('../../application/data/app-events-emitter');
const workingDataCreator = require('./src/working-data-creator');
const selectUserEventHandler = require('../../user/select/user-select-event-handler');

class UserEvents {
  initUserEvents() {
    appEventsEmitter
      .on('select-user', this._selectUserEventHandler);
  }
  async _selectUserEventHandler(requestBody, responseCallback) {
    const workingData = workingDataCreator.createSelectUserWorkingData(requestBody);
    const userResponse = await selectUserEventHandler(workingData);
    await responseCallback(userResponse);
  }
}

const userEvents = new UserEvents();
module.exports = userEvents;