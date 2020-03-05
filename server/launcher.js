'use strict';

const cliMakerConfig = require('../cli-maker.config.json');
const AppServer = require('./server');

const initUserComponent = require('./components/user/launcher');
const initProjectComponent = require('./components/project/launcher');
const initRepositoryComponent = require('./components/repository/launcher');
const initEventsComponent = require('./components/events/launcher');
const initResponseComponent = require('./components/response/launcher');

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
    initUserComponent();
    initProjectComponent();
    initRepositoryComponent();
    initEventsComponent();
    initResponseComponent();
  }
}

const appLauncher = new AppLauncher();
appLauncher.initApplication(cliMakerConfig);