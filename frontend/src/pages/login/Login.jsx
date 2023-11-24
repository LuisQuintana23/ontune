import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
    const {login} = useContext(AuthContext);
    const handleLogin = () => {
        login()
    };
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
                    <form>
                        <input type="text" placeholder="Usuario"></input>
                        <input type="password" placeholder="Contraseña"></input>
                        <button onClick={handleLogin}>Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login