import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../config/config.js";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    checkAuth()
  }, [])


  async function requestNewAccessToken(refreshToken){
    try {
      const res = await axios({
        url: `${API_URL}/auth/refresh-token`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${refreshToken}`
        }
      })

      if (res.status === 200) {
        return res.data.accessToken;
      } else {
        throw new Error(res.statusText)
      }
    } catch(err) {
      console.log(err)
      return null;
    }
  }

 async function getUserInfo(token) {
   try {
     const res = await axios({
       url: `${API_URL}/auth/user`,
       method: 'GET',
       headers: {
         Authorization: `Bearer ${token}`
       }
     })

     console.log(res)

     if (res.status === 200) {
       return res.data;
     } else {
       throw new Error(res.statusText)
     }
   } catch(err) {
     console.log(err)
     return null;
   }
 }

  async function checkAuth(){
    // ya existe usuario autenticado
    if(accessToken)
    {
      setIsAuthenticated(true)
    }
    // usuario no autenticado
    else {
      const token = getRefreshToken()
      if (token){
        const newAccessToken = await requestNewAccessToken(token);
        if(newAccessToken){
          const userInfo = await getUserInfo(newAccessToken);
          if(userInfo){
            saveSessionInfo(userInfo, newAccessToken, token)
          }
        }
      }
    }
  }

  function saveSessionInfo(userInfo, accessToken, refreshToken){
    setUser(userInfo)
    setAccessToken(accessToken)
    localStorage.setItem("token", JSON.stringify(refreshToken))
    setIsAuthenticated(true)
  }

  function getAccessToken() {
    return accessToken;
  }

  function getRefreshToken() {
    const tokenData =  localStorage.getItem('token')
    if (tokenData){
      const token = JSON.parse(tokenData)
      return token
    }

    return null
  }

  function saveUser(userData){
    saveSessionInfo(userData.data.user, userData.data.accessToken, userData.data.refreshToken)
  }

  function getUser(){
    return user;
  }

  function logout(){
    setIsAuthenticated(false)
    setAccessToken("")
    setUser(undefined)
    localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, getAccessToken, saveUser, getRefreshToken, getUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);