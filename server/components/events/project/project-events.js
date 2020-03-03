'use strict';

const appEventsEmitter = require('../../application/data/app-events-emitter');
const workingDataCreator = require('./src/working-data-creator');
const selectProject = require('../../project/select/select-project');

class ProjectEvents {
  initProjectEvents() {
    appEventsEmitter
      .on('select-project', this._selectProjectEventHandler);
  }

  async _selectProjectEventHandler(requestBody, responseCallback) {
    const workingData = workingDataCreator.createSelectProjectWorkingData(requestBody);
    const projectResponse = await selectProject.handler(workingData);
    await responseCallback(projectResponse);
  }
}

const projectEvents = new ProjectEvents();
module.exports = projectEvents;