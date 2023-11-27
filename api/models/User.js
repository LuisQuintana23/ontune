// importar conexion de la base de datos
import db from "../database/db.js";
// importar sequelizer
import {DataTypes} from "sequelize";

const User = db.define('user',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: true,
        primaryKey: true
    },
    username:{type:DataTypes.STRING},
    email: {
        type:DataTypes.STRING,
    },
    password:{type:DataTypes.STRING},
    token:{type:DataTypes.STRING}
},
{
    // cambiar a snake case
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}
)



export default User