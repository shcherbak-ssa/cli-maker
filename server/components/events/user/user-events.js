'use strict';

const appEventsEmitter = require('../../application/data/app-events-emitter');
const selectUserEventHandler = require('../../user/select/user-select-event-handler');

class UserEvents {
  initUserEvents() {
    appEventsEmitter
      .on('select-user', this._selectUserEventHandler);
  }
  async _selectUserEventHandler(requestBody, responseCallback) {

  }
}

const userEvents = new UserEvents();
module.exports = userEvents;