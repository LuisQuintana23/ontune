import user from "./User.js";
import login from "./Login.js";

// un usario tiene muchos logins
user.hasMany(login);
// un login pertenece a un solo usuario
login.belongsTo(user, {
    foreignKey: {
        allowNull: false,
        name: 'user_id',
    }
});
