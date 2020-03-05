'use strict';

class CurrentUser {
  constructor(connectionID) {
    this._connectionID = connectionID;
  }

  check() {
    return true;
  }
}

module.exports = CurrentUser;