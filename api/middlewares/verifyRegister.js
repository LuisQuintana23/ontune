import user from "../models/User.js";

export const existsEmailOrUsername = async (req, res, next) => {
    const {email, username} = req.body;


    const userWithUsernameExists = await user.findOne({
        where:{
            username: username,
        }
    })

    // si el username ya fue registrado se retorna una respuesta sin token
    if (userWithUsernameExists !== null){
        return res.status(400).json({message: "el username ingresado ya fue registrado"})
    }

    const userWithEmailExists = await user.findOne({
        where:{
            email: email,
        }
    })

    // si el correo ya fue registrado se retorna una respuesta sin token
    if (userWithEmailExists !== null){
        return res.status(400).json({message: "el correo ingresado ya fue registrado"})
    }

    next()
}