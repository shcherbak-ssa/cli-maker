'use strict';

const UserSelectWorkingDataCreator = require('../../../user/data/user-select-working-data');

class WorkingDataCreator {
  createSelectUserWorkingData(requestBody) {
    const creator = new UserSelectWorkingDataCreator();
    const accessID = requestBody.getAccessID();

    return creator
      .setAccessID(accessID)
      .getWorkingData();
  }
}

const workingDataCreator = new WorkingDataCreator();
module.exports = workingDataCreator;