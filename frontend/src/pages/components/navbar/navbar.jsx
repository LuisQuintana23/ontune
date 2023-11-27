import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../../context/darkModeContext.jsx";
import { useAuth } from "../../../context/authContext.jsx";
import axios from "axios";
import {API_URL} from "../../../config/config.js";

const NavBar = () => {

    const {toggle, darkMode} = useContext (DarkModeContext)
    const auth = useAuth();

    async function handleLogout(e){
        e.preventDefault()

        try{
            const res = await axios({
                url: 'http://localhost:8888/api/auth/logout',
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${auth.getRefreshToken()}`
                }
            })

            if(res.status === 200){
                auth.logout()
            }
        } catch(err) {
            console.log(err)
        }
    }
    
    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span>Ontune</span>
                </Link>
                <HomeOutlinedIcon className="item"/>
                {darkMode ? (
                    <WbSunnyOutlinedIcon onClick={toggle} className="item" />
                    ) : (
                    <DarkModeOutlinedIcon onClick={toggle} className="item" />
                )}
                <ViewAgendaOutlinedIcon className="item"/>
                <div className="search">
                    <ManageSearchOutlinedIcon className="item"/>
                    <input type="text" placeholder="Búsqueda"/>
                </div>
            </div>
           <div className="right">
            <PlaceOutlinedIcon className="item"/>
            <NotificationsNoneOutlinedIcon className="item"/>
            <QuestionAnswerOutlinedIcon className="item"/>
            <PermIdentityOutlinedIcon className="item"/>
            <div className="user">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU" alt=""/>
                <span>{auth.getUser().username}</span>
            </div>
            <div>
                <a onClick={handleLogout}>
                    <LogoutIcon className="item" />
                </a>
            </div>
            </div> 
        </div>
    );
};

export default NavBar