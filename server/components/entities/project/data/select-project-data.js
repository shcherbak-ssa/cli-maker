'use strict';

class SelectProjectDataType {
  constructor() {
    this.commands = [];
  }
}

class SelectProjectData {
  constructor(selectProjectDataType) {
    this._data = selectProjectDataType;
  }

  getSelectProjectData() {
    return this._data;
  }
}

class SelectProjectDataCreator {
  constructor() {
    this._data = new SelectProjectDataType();
  }

  setCommands(commands) {
    this._data.commands = commands;
    return this;
  }
  getSelectData() {
    return new SelectProjectData(this._data);
  }
}

module.exports = SelectProjectDataCreator;