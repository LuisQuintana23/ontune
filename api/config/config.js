import 'dotenv/config';
const {DB_USER, DB_PORT, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

export default {
  "development": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "mysql",
    "seederStorage": "sequelize",
    "seederStorageTableName": "seeders",
    "migrationStorage": "sequelize",
    "migrationStorageTableName": "migrations",
    "define":{
      "timestamps":true,
      "underscored": true
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};