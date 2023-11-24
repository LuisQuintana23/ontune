import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {
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
                    <form>
                        <input type="text" placeholder="Nombre de usuario"></input>
                        <input type="email" placeholder="Correo Electrónico"></input>
                        <input type="text" placeholder="Usuario"></input>
                        <input type="text" placeholder="Nombre"></input>
                        <button>Regístrate</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;