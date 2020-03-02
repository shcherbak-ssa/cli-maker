'use strict';

const userEvents = require('./user/user-events');

function initEventsComponent() {
  userEvents.initUserEvents();
}

module.exports = initEventsComponent;