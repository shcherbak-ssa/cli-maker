'use strict';

const users = require('./users');

class UsersController {
  checkUser(connectionID) {
    const currentUser = users.getUser(connectionID);
    return currentUser.check();
  }
}

const usersController = new UsersController();
module.exports = usersController;