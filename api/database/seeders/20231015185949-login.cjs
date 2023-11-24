module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('logins', [
      {
        user_id: 1,
        created_at: new Date(),
      },
      {
        user_id: 2,
        created_at: new Date(),
      },
      {
        user_id: 3,
        created_at: new Date(),
      },
      {
        user_id: 4,
        created_at: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('logins', null, {});
  }
};
