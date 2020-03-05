'use strict';

const ProjectSelectWorkingDataCreator = require(
  '../../../project/data/project-select-working-data');
const ProjectUseCaseWorkingDataCreator = require(
  '../../../project/data/project-use-case-working-data');

class WorkingDataCreator {
  createSelectProjectWorkingData(requestBody) {
    const creator = new ProjectSelectWorkingDataCreator();
    const accessID = requestBody.getAccessID();

    return creator
      .setAccessID(accessID)
      .getWorkingData();
  }
  createUseCaseWorkingData(requestBody) {
    const creator = new ProjectUseCaseWorkingDataCreator();
    const accessID = requestBody.getAccessID();
    const data = requestBody.getData();

    return creator
      .setAccessID(accessID)
      .setProjectData(data)
      .getWorkingData();
  }
}

const workingDataCreator = new WorkingDataCreator();
module.exports = workingDataCreator;