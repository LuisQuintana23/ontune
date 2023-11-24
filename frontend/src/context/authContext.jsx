import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //Parte en la que es necesaria la configuración de Backend
    setCurrentUser({
      id: 1,
      name: "Usuario_5",
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU",
    });
  };

  //esta parte del código provoca que el usuario se establece automáticamente al cargar la aplicación mediante la llamada a login() dentro de useEffect en el AuthContextProvider. Esto significa que cada vez que el componente se monta o actualiza, el usuario se establecerá automáticamente, y es por eso que siempre te redirige al login.
  /* useEffect(() => {
     localStorage.setItem("user", JSON.stringify(currentUser));
   }, [currentUser]); */

  useEffect(() => {
    // Establecer el usuario solo si no hay un usuario actual en el localStorage
    if (!localStorage.getItem("user")) {
      login();
    }
  }, []);



  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};