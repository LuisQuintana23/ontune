import {Link, redirect, Form, Navigate, useNavigate} from "react-router-dom";
import "./login.scss";
import {useState} from "react";
import {useAuth} from "../../context/authContext.jsx";
import axios from "axios";
import {API_URL} from "../../config/config.js";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorResponse, setErrorResponse] = useState("");

    const auth = useAuth();
    const goTo = useNavigate();

    if (auth.isAuthenticated){
        return <Navigate to={"/"}/>
    }
    async function handleSubmit(e) {
        e.preventDefault()

        const res = await axios({
            url: `${API_URL}/auth/login`,
            method: 'POST',
            data: {email: email, password: password}
        })
            .then(res => {
                // usuario autenticado
                if (res.status === 200) {
                    console.log("Login exitoso")
                    setErrorResponse("")

                    if(res.data.accessToken && res.data.refreshToken){
                        auth.saveUser(res);
                    }
                    goTo("/")
                } else {
                    // usuario no autenticado, ocurrio un error
                    setErrorResponse(res.data.message)
                }
            })
            .catch(err => {
                setErrorResponse(err.response.data.message)
            })

    }


        return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>On tune</h1>
                    <p>
                        Párrafo de prueba
                    </p>
                    <span>¿No tienes cuenta?</span>
                    <Link to="/register">
                        <button>Regístrate</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Iniciar Sesión</h1>
                    <form
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        { !! errorResponse && <div>{errorResponse}</div>}
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Correo"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Contraseña"
                        />
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
