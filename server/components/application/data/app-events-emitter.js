'use strict';

const EventEmitter = require('events');

class AppEventsEmitter extends EventEmitter {}

const appEventsEmitter = new AppEventsEmitter();
module.exports = appEventsEmitter;