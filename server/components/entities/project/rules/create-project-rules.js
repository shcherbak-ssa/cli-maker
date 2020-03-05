'use strict';

const {projectRules, errorMessages} = require('./project-rules');
const {ProjectRulesError} = require('../errors');

class CreateProjectRules {
  _maxProjectNameLength = projectRules.maxProjectNameLength;
  _invalidSymbols = projectRules.invalidSymbols;
  
  async check(projectName) {
    if( this._isOverMaxLength(projectName) )
      throw new ProjectRulesError(errorMessages.overMaxLength);
    
    if( this._isContainsInvalidSymbols(projectName) )
      throw new ProjectRulesError(errorMessages.invalidSymbol);
  }

  _isOverMaxLength(projectName) {
    return projectName.length > this._maxProjectNameLength;
  }
  _isContainsInvalidSymbols(projectName) {
    return !this._invalidSymbols.test(projectName);
  }
}

module.exports = CreateProjectRules;