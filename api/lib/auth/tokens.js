import jwt from "jsonwebtoken";
import { getUserInfo } from "./users.js";
const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET, JWT_EXPIRES } = process.env;



export function getTokenFromHeader(headers){
    if (headers && headers.authorization) {
        // separa la palabra bearer del token
        const parted = headers.authorization.split(" ");
        if (parted.length === 2){
            // 0 - bearer ; 1 - token
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
}
export function verifyAccessToken(token){
    return jwt.verify(token, JWT_ACCESS_SECRET)
}

export function verifyRefreshToken(token){
    return jwt.verify(token, JWT_REFRESH_SECRET)
}


export function createAcccessToken(user){
    return sign(getUserInfo(user) , true)
}

export function createRefreshToken(user){
    return sign(getUserInfo(user), false)
}
function sign(payload, isAccessToken)
{
    return jwt.sign(
        payload,
        isAccessToken
            ? JWT_ACCESS_SECRET
            : JWT_REFRESH_SECRET,
        {
            algorithm: "HS256",
            expiresIn: JWT_EXPIRES
        }
    )
}