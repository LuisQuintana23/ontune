import "./rightbar.scss"

const RightBar = () => {
    return (
        <div className="rightbar">
            <div className="container">
                <div className="item">
                    <span>Sugerencias</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU" alt=""/>
                            <span>Otro_usuario</span>
                        </div>
                        <div className="buttons">
                            <button>Seguir</button>
                            <button>Eliminar</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU" alt=""/>
                            <span>Otro_Usuario_2</span>
                        </div>
                        <div className="buttons">
                            <button>Seguir</button>
                            <button>Eliminar</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Actividad reciente</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU" alt=""/>
                            <span>Otro_Usuario_2</span>
                            <p>Te ha empezado a seguir</p>
                        </div>
                        <span>hace 1 minuto</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU" alt=""/>
                            <span>Otro_Usario_3</span>
                            <p>Le gustó tu publicación</p>
                        </div>
                        <span>hace 10 minutos</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU" alt=""/>
                            <span>Otro_Usuario_3</span>
                            <p>Te ha empezado a seguir</p>
                        </div>
                        <span>hace 15 minutos</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU" alt=""/>
                            <span>Otro_Usuario_4</span>
                            <p>Comentó en tu publicación</p>
                        </div>
                        <span>hace 25 minutos</span>
                    </div>
                </div>
                <div className="item">
                    <span>En línea</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU" alt=""/>
                            <div className="online"/>
                            <span>Otro_Usuario_2</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU" alt=""/>
                            <div className="online"/>
                            <span>Otro_Usuario_4</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU" alt=""/>
                            <div className="online"/>
                            <span>Otro_Usuario_3</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU" alt=""/>
                            <div className="online"/>
                            <span>Otro_usuario</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightBar