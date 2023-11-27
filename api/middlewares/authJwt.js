import jwt from "jsonwebtoken";
import user from "../models/User.js";
import {getTokenFromHeader, verifyAccessToken} from "../lib/auth/tokens.js";

// virifica si el usuario está autenticado
export const authenticated = async (req, res, next) => {
    // para autenticar la cookie debe estar presente
    const token = getTokenFromHeader(req.headers)

    if (token) {
        try{
            // obtener datos de la cookie
            const decoded = verifyAccessToken(token)
            if (decoded){
                req.user = {...decoded.user};
                return next();
            } else {
                return res.status(401).json({message: "no autorizado"})
            }
        }
        catch(err) {
            return res.status(401).json({message: "no autorizado"})
        }
    } else {
        return res.status(403).json({message: "sin token"})
    }
}

