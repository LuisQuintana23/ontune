const bcryptjs = require("bcryptjs");


async function hashPassword(password){
  return await bcryptjs.hash(password, 8);
}


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        username: 'bedu1',
        password: await hashPassword('password1'),
        email: 'bedu1@example.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: 'bedu2',
        password: await hashPassword('password2'),
        email: 'bedu2@example.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: 'bedu3',
        password: await hashPassword('password3'),
        email: 'bedu3@example.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: 'bedu4',
        password: await hashPassword('password4'),
        email: 'bedu4@example.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: 'bedu5',
        password: await hashPassword('password5'),
        email: 'bedu5@example.com',
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};