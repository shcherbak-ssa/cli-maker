'use strict';

const AppServer = require('../server');

class AppLauncher {
  initApplication(config) {
    const appServer = new AppServer(config);
    appServer.run();
  }
}

module.exports = AppLauncher;