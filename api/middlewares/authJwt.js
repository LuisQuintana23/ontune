import {promisify} from "util";
import jwt from "jsonwebtoken";
import user from "../models/User.js";

// virifica si el usuario está autenticado
export const authenticated = async (req, res, next) => {
    // para autenticar la cookie debe estar presente
    const token = req.headers["x-access-token"]

    if (token) {
        try{
            // obtener datos de la cookie
            const decoded = await jwt.verify(token, process.env.JWT_SECRET)
            const userAuth = await user.findOne({
                where:{
                    id: decoded.id,
                }
            })
            // continuar sin usuario en caso de no coincidencias con el usuario en la bd
            if (userAuth.length === 0){
                return res.status(404).json({message: "usuario no encontrado"})
            }
            req.user = userAuth;
            return next();
        }
        catch(err) {
            return res.status(401).json({message: "no autorizado"})
        }
    } else {
        return res.status(403).json({message: "sin token"})
    }
}

