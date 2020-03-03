'use strict';

const projectRules = {
  maxProjectNameLength: 24,
  invalidSymbols: /`~!#\$%\^&\*\(\)\+=;:'\"\\\|\/,{}\[]/
};
const errorMessages = {
  overMaxLength: `project name cannot exceed ${projectRules.maxProjectNameLength} characters`,
  invalidSymbol: `project name may contains numbers, letters and symbols: @, _, -,`
};

module.exports = {
  projectRules,
  errorMessages
};