'use strict';

const cliMakerConfig = require('./cli-maker.config.json');
const AppLauncher = require('./components/application/launcher');

const appLauncher = new AppLauncher();
appLauncher.initApplication(cliMakerConfig);