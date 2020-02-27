'use strict';

const users = {};
const connectionIDs = {};

class UsersCreator {
  create() {
    const connectionID = connectionIDs.createConnectionID();
    users.addUser(connectionID);
    return connectionID;
  }
  remove(connectionID) {
    connectionIDs.removeConnectionID(connectionID);
    users.removeUser(connectionID);
  }
}

const usersCreator = new UsersCreator();
module.exports = usersCreator;