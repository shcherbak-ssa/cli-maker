'use strict';

const appEventsEmitter = require('../../application/data/app-events-emitter');
const workingDataCreator = require('./src/working-data-creator');
const selectProject = require('../../project/select/select-project');
const createProject = require('../../project/use-cases/create-project');
const renameProject = require('../../project/use-cases/rename-project');
const deleteProject = require('../../project/use-cases/delete-project');

class ProjectEvents {
  initProjectEvents() {
    appEventsEmitter
      .on('select-project', this._selectProjectEventHandler)
      .on('create-project', this._createProjectEventHandler)
      .on('rename-project', this._renameProjectEventHandler)
      .on('delete-project', this._deleteProjectEventHandler);
  }

  async _selectProjectEventHandler(requestBody, responseCallback) {
    const workingData = workingDataCreator.createSelectProjectWorkingData(requestBody);
    const projectResponse = await selectProject.handler(workingData);
    await responseCallback(projectResponse);
  }
  async _createProjectEventHandler(requestBody, responseCallback) {
    await this._useCaseEventHandler(createProject, requestBody, responseCallback);
  }
  async _renameProjectEventHandler(requestBody, responseCallback) {
    await this._useCaseEventHandler(renameProject, requestBody, responseCallback);
  }
  async _deleteProjectEventHandler(requestBody, responseCallback) {
    await this._useCaseEventHandler(deleteProject, requestBody, responseCallback);
  }

  async _useCaseEventHandler(useCase, requestBody, responseCallback) {
    const workingData = workingDataCreator.createUseCaseWorkingData(requestBody);
    const projectResponse = await useCase.runUseCase(workingData);
    await responseCallback(projectResponse);
  }
}

const projectEvents = new ProjectEvents();
module.exports = projectEvents;