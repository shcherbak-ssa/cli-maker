'use strict';

const cliMakerConfig = require('./cli-maker.config.json');
const AppLauncher = require('./launcher');

const appLauncher = new AppLauncher();
appLauncher.initApplication(cliMakerConfig);