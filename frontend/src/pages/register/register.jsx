import {Link, Navigate, useNavigate} from "react-router-dom";
import "./register.scss"
import {useState} from "react";
import {useAuth} from "../../context/authContext.jsx";
import axios from "axios";
import {API_URL} from "../../config/config.js";


const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [errorResponse, setErrorResponse] = useState("");

    const auth = useAuth();
    const goTo = useNavigate();

    if (auth.isAuthenticated){
        return <Navigate to={"/"}/>
    }

    async function handleSubmit(e){
        e.preventDefault()

        const res = await axios({
            url: `${API_URL}/auth/register`,
            method: 'POST',
            data: {username: username, email: email, password: password, password_confirm: passwordConfirm}
        })
            .then(res => {
                // usuario creado
                if (res.status === 200){
                    setErrorResponse("")
                    goTo("/login")
                }
                else {
                    // usuario no creado, ocurrio un error
                    setErrorResponse(res.data.message)
                }
            })
            .catch(err => {
                setErrorResponse(err.response.data.message)
            })

    }

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>On Tune</h1>
                    <p>
                        Párrafo de prueba
                    </p>
                    <span>¿Tienes cuenta?</span>
                    <Link to="/login">
                        <button>Inicia Sesión</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Regístrate</h1>
                    <form onSubmit={handleSubmit} method="POST">
                        { !! errorResponse && <div>{errorResponse}</div>}
                        <input
                            type="text"
                            name="username"
                            id="usernae"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="Nombre de Usuario"
                        />

                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Correo Electrónico"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Contraseña"
                        />
                        <input
                            type="password"
                            name="password_confirm"
                            id="password_confirm"
                            value={passwordConfirm}
                            onChange={e => setPasswordConfirm(e.target.value)}
                            placeholder="Confirma Contraseña"
                        />
                        <button type="submit">Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;