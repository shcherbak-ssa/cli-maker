'use strict';

const CurrentUser = require('../current-user');

class Users {
  _users = new Map();

  getUser(connectionID) {
    return this._users.get(connectionID);
  }
  addUser(connectionID) {
    const currentUser = new CurrentUser(connectionID);
    this._users.set(connectionID, currentUser);
    console.log('added user: ', connectionID);
  }
  removeUser(connectionID) {
    this._users.delete(connectionID);
    console.log('removed user: ', connectionID);
  }
}

const users = new Users();
module.exports = users;