/**
 * Limita los atributos a los que se accedera de usuario
 * @param user
 */
export function getUserInfo(user){
   return {
       username: user.username,
       email: user.email
   }
}