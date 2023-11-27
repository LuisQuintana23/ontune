const bcryptjs = require("bcryptjs");


async function hashPassword(password){
  return await bcryptjs.hash(password, 8);
}


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: "61551fe1-9af2-4590-a959-d954d2d1309c",
        username: 'bedu1',
        password: await hashPassword('password1'),
        email: 'bedu1@example.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: "6c57ea59-bd77-40b0-9a46-7b3024e220a6",
        username: 'bedu2',
        password: await hashPassword('password2'),
        email: 'bedu2@example.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: "0b1da65a-9a9d-4e95-a4dc-f41b7f668c23",
        username: 'bedu3',
        password: await hashPassword('password3'),
        email: 'bedu3@example.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: "133c9829-c27e-4e77-b8aa-f01d353f3d53",
        username: 'bedu4',
        password: await hashPassword('password4'),
        email: 'bedu4@example.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: "3d2fbe9b-b2ab-4798-aaad-8a01d9fd8bc5",
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