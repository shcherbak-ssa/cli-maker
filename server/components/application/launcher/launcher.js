'use strict';

const AppServer = require('../server');

class AppLauncher {
  initApplication(config) {
    try {
      this._tryToInitApplication(config);
    } catch( err ) {
      console.log('application initializing error: ', err);
    }
  }
  _tryToInitApplication(config) {
    const appServer = new AppServer(config);
    appServer.run();
  }
}

module.exports = AppLauncher;