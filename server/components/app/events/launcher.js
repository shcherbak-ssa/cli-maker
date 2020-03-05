'use strict';

const userEvents = require('./user/user-events');
const projectEvents = require('./project/project-events');

function initEventsComponent() {
  userEvents.initUserEvents();
  projectEvents.initProjectEvents();
}

module.exports = initEventsComponent;