'use strict';

class UserDataType {
  constructor() {
    this.name = '';
    this.userID = '';
  }
}

class UserData {
  constructor(userDataType) {
    this._data = userDataType;
  }

  getName() {
    return this._data.name;
  }
  getUserID() {
    return this._data.userID;
  }
  getData() {
    return this._data;
  }
}

class UserDataCreator {
  constructor() {
    this._data = new UserDataType();
  }

  setName(name) {
    this._data.name = name;
    return this;
  }
  setUserID(userID) {
    this._data.userID = userID;
    return this;
  }
  getUserData() {
    return new UserData(this._data);
  }
}

module.exports = UserDataCreator;