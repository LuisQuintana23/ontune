//importar conexion de la base de datos
import db from "../database/db.js";
//importar sequelizer
import {DataTypes} from "sequelize";

const login = db.define('logins',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT'
        },
        created_at: {
            allowNull: false,
            type: Sequelize.DATE
        },
    },
    {
        // cambiar a snake case
        created_at: 'created_at',
        updated_at: 'updated_at'
    }
)

export default login