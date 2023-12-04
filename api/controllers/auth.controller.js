//importar el modelo
import User from "../models/User.js";
import bcryptjs from 'bcryptjs';
import {createAcccessToken, createRefreshToken, getTokenFromHeader, verifyRefreshToken} from "../lib/auth/tokens.js";
import {getUserInfo} from "../lib/auth/users.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const params = req.body;
    const { username, email, password, password_confirm } = req.body
    const hashPassword = await bcryptjs.hash(password, 8);

    try {
        // crear al usuario con datos dados
        if( !!!username || !!!email || !!!password || !!!password_confirm ){
            return res.status(400).json({message: "existen campos vacios"});
        }
        else if(password !== password_confirm){
            return res.status(400).json({message: "las contraseñas no coinciden"})
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

            // solo el home se accesa cuando se tiene jwt
            return res.status(200).json({message: "usuario creado exitosamente"})
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
        if (!!!email || !!!password)
        {
            return res.status(400).json({message: "existen campos vacios"});
        } else {
            // encontrar coincidencias con el primer registro dado un correo
            const userLogin = await User.findOne({
                where:{
                    email: email,
                }
            })

            // verificar si el usuario existe y
            if ( userLogin === null ){
                return res.status(400).json({message: "usuario no encontrado"});
            }
            // si las contraseñas con hash coinciden
            else if (! ( await bcryptjs.compare(password, userLogin.password))){
                return res.status(400).json({message: "correo o contraseña incorrectos"});
            }
            else {
                // generar json web token para poder mantener su sesión activa

                const accessToken = createAcccessToken(userLogin);
                const refreshToken = createRefreshToken(userLogin);

                // actualizar refresh token en la base de datos
                userLogin.token = refreshToken;
                await userLogin.save();

                return res.status(200).json({user: getUserInfo(userLogin), accessToken, refreshToken})
            }
        }
    } catch( err ){
        console.log(err)
        return res.status(400).json({message: `ha ocurrido un error`})
    }

}

export const refreshToken = async (req, res) => {
    const refreshToken = getTokenFromHeader(req.headers)

    if (refreshToken){
        // buscar en bd el token
        try{
            const found = await User.findOne({
                where:{
                    token: refreshToken,
                }
            })

            if(!found){
                return res.status(401).json({message: "no autorizado"})
            }

            const payload = verifyRefreshToken(found.token);


            if(payload){
                const accessToken = createAcccessToken(payload)

                return res.status(200).json({accessToken})
            } else {
                res.status(401).json({message: "no autorizado"})
            }

        } catch(err){
            res.status(401).json({message: "no autorizado"})
        }

    } else {
        res.status(401).json({message: "no autorizado"})
    }
}


export const getUser = async (req, res) => {
    const refreshToken = getTokenFromHeader(req.headers)
    if (refreshToken){
        // buscar en bd el token
        try {
            const user = await jwt.verify(refreshToken, process.env.JWT_ACCESS_SECRET)

            if(user){
                return res.status(200).json(getUserInfo(user))
            } else {
                return res.status(400).json("error en token")
            }


        } catch (err){
            console.log(err)
            return res.status(400).json("error en token")
        }
    }

    return res.status(400).json("sin token")
}


export const logout = async (req, res) => {
    try{
        const refreshToken = getTokenFromHeader(req.headers)

        if(refreshToken){
            const user = await User.findOne({
                where:{
                    token: refreshToken,
                }
            })

            user.token = null
            user.save()

            res.status(200).json({message: "token eliminado"})
        }

    } catch (err) {
        res.status(500).json({message: "no fue posible eliminar el token"})
    }
}