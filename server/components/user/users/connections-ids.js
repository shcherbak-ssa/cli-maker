'use strict';

const nanoid = require('nanoid');

const CONNECTION_ID_SIZE = 30;

class ConnectionsIDs {
  _existingConnectionIDs = new Set();

  createConnectionID() {
    const connectionID = nanoid(CONNECTION_ID_SIZE);
    if( this._isConnectionIDExist(connectionID) ) return this.createConnectionID();

    this._existingConnectionIDs.add(connectionID);
    return connectionID;
  }
  removeConnectionID(connectionID) {
    this._existingConnectionIDs.delete(connectionID);
  }

  _isConnectionIDExist(connectionID) {
    return this._existingConnectionIDs.has(connectionID);
  }
}

const connectionsIDS = new ConnectionsIDs();
module.exports = connectionsIDS;