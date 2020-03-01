'use strict';

class RequestBodyData {
  accessID = '';
  data = {};
}

class RequestBody {
  constructor(requestBodyData) {
    this._data = requestBodyData;
  }

  getAccessID() {
    return this._data.accessID;
  }
  getData() {
    return this._data.data;
  }
}

class RequestBodyCreator {
  constructor() {
    this._data = new RequestBodyData();
  }

  setAccessID(accessID) {
    this._data.accessID = accessID;
    return this;
  }
  setData(data) {
    this._data.data = data
    return this;
  }
  getRequestBody() {
    return new RequestBody(this._data);
  }
}

module.exports = RequestBodyCreator;