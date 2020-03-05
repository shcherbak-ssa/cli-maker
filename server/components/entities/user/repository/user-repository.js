'use strict';

const IUserRepository = require('./i-user-repository');

class UserRepository {
  async getUserData(accessID) {
    return await IUserRepository.getUserData(accessID);
  }
}

const userRepository = new UserRepository();
module.exports = userRepository;