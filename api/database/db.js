import {Sequelize} from 'sequelize';
const {DB_USER, DB_PORT, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const db = new Sequelize (`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,{
    logging: true
})

export default db