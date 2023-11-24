//importar el modelo
import User from "../models/User.js";
import {now} from "sequelize/lib/utils";

// mostrar todos los usuarios
export const getAllUsers = async (req, res) => {
    try{
        const users = await User.findAll()
        return res.json(users)
    }catch (error){
        return res.json(404, {message: error.message})
    }
}

// mostrar un solo usuario
export const getUser = async (req, res) => {
    try{
        const user = await user.findOne({
            where:{
                id: req.params.id
            }
        })
        return res.json(user)
    }catch (error){
        return res.json(404, {message: error.message})
    }
}

// crear un registro de usuario
export const createUser = async (req, res) => {
    try{
        const { username, password, email } = req.body;
        await User.create({
            username: username,
            password: password,
            created_at: now(),
            updated_at: now(),
            email: email
        })

        return res.json({message: "usuario creado satisfactoriamente"})

    }catch (error){
        return res.json(404, {message: error.message})
    }
}

// actualizar un registro
export const updateUser = async (req, res)=>{
    try{
        await User.update(req.body,{
            where: {id: req.params.id}
        })
        return res.json(201,{message: "Usuario actualizado satisfactoriamente"})
    }catch (error){
        return res.json(404, {message: error.message})
    }

}

// eliminar un registro
export const deleteUser = async (req, res)=>{
    try{
        await User.destroy({
            where: {id: req.params.id}
        })
        return res.status(200).json({message:"Usuario eliminado :("})
    }catch (error){
        return res.json(404, {message: error.message})
    }
}