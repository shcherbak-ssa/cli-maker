'use strict';

const users = require('./users');
const connectionIDs = require('./connections-ids');

class UsersCreator {
  async create() {
    const connectionID = connectionIDs.createConnectionID();
    users.addUser(connectionID);
    
    return connectionID;
  }
  async remove(connectionID) {
    connectionIDs.removeConnectionID(connectionID);
    users.removeUser(connectionID);
  }
}

const usersCreator = new UsersCreator();
module.exports = usersCreator;