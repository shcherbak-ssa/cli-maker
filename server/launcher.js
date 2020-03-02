'use strict';

const AppServer = require('./components/application/server');
const initProjectComponent = require('./components/project/launcher');
const initRepositoryComponent = require('./components/repository/launcher');
const initEventsComponent = require('./components/events/launcher');

class AppLauncher {
  initApplication(config) {
    try {
      this._tryToInitApplication(config);
    } catch( err ) {
      console.log('application initializing error: ', err);
      process.exit(1);
    }
  }
  _tryToInitApplication(config) {
    this._initComponents();

    const appServer = new AppServer(config);
    appServer.run();
  }
  _initComponents() {
    initProjectComponent();
    initRepositoryComponent();
    initEventsComponent();
  }
}

module.exports = AppLauncher;