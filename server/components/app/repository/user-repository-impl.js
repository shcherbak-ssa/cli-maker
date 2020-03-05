'use strict';

const usersDB = require('../../../db/users.json');
const IUserRepository = require('../user/repository/i-user-repository');
const {UserDoesNotExist} = require('../user/errors');

class UserRepositoryImpl {
  async getUserData(accessID) {
    if( accessID in usersDB ) return usersDB[accessID];
    else throw new UserDoesNotExist(`user with id ${accessID} doesn't exist`);
  }
}

function implementUserRepository() {
  const userRepositoryImpl = new UserRepositoryImpl();
  IUserRepository.getUserData = userRepositoryImpl.getUserData;
}

module.exports = implementUserRepository;