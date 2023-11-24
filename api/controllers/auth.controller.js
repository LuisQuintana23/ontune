//importar el modelo
import User from "../models/User.js";
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

export const register = async (req, res) => {
    const params = req.body;
    const { username, email, password, password_confirm } = req.body
    const hashPassword = await bcryptjs.hash(password, 8);

    try {
        // crear al usuario con datos dados
        if(password !== password_confirm){
            return res.status(400).json({token: null, message: "contraseñas no coinciden"})
        }
        else
        {
            const newUser = await User.create({
                username: username,
                password: hashPassword,
                created_at: params.created_at,
                updated_at: params.updated_at,
                email: email
            })
            // generar json web token para poder mantener su sesión activa
            const token = jwt.sign({id: newUser.id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_TIME,})

            // solo el home se accesa cuando se tiene jwt
            return res.status(200).json({token})
        }
    } catch (err){
        console.log(err);
        return res.status(400).json({message: `ha ocurrido un error`})
    }
}

export const login = async (req, res) => {
    try{
        const { email, password } = req.body

        // si no se ingresa el email o password
        if (!email || !password)
        {
            return res.json({message: "campos vacios"});
        } else {
            // encontrar coincidencias con el primer registro dado un correo
            const userLogin = await User.findOne({
                where:{
                    email: email,
                }
            })

            // verificar si el usuario existe y si las contraseñas con hash coinciden
            if (userLogin.length === 0 || ! ( await bcryptjs.compare(password, userLogin.password))){
                return res.json({message: "no coinciden las credenciales"});
            } else {
                // generar json web token para poder mantener su sesión activa
                const token = jwt.sign({id: userLogin.id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_TIME,})

                return res.status(200).json({token})
            }
        }
    } catch( err ){
        console.log(err)
        return res.status(400).json({message: `ha ocurrido un error`})
    }

}
export const logout = async (req, res) => {
    res.clearCookie('jwt');
    return res.redirect('/')
}