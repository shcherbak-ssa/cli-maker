'use strict';

const usersDB = require('../../../db/users.json');
const IUserRepository = require('../user/repository/i-user-repository');

class UserRepositoryImpl {
  async getUserData(accessID) {
    return usersDB[accessID];
  }
}

function implementUserRepository() {
  const userRepositoryImpl = new UserRepositoryImpl();
  IUserRepository.getUserData = userRepositoryImpl.getUserData;
}

module.exports = implementUserRepository;