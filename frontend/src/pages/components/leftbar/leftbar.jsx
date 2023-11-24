import "./leftbar.scss"
import { Link } from "react-router-dom";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

const LeftBar = () => {
    const {currentUser} = useContext(AuthContext);
    return (
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="item">
                        <GroupOutlinedIcon/>
                        <span>Seguidores</span>
                    </div>
                    <div className="item">
                        <Groups3OutlinedIcon/>
                        <span>Grupos</span>
                    </div>
                </div>
                <hr/>
                <div className="menu">
                <span>Sigue Aprendiendo</span>
                    <div className="item">
                        <SchoolOutlinedIcon/>
                        <span>Cursos</span>
                    </div>
                    <div className="item">
                        <MenuBookOutlinedIcon/>
                        <span>Tutoriales</span>
                    </div>
                </div>
                <hr/>
                <div className="menu">
                    <span>Accesos directos</span>
                    <div className="item">
                        <CalendarTodayOutlinedIcon/>
                        <span>Eventos</span>
                    </div>
                    <div className="item">
                        <PhotoLibraryOutlinedIcon/>
                        <span>Galería</span>
                    </div>
                    <div className="item">
                        <VideoLibraryOutlinedIcon/>
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <SendOutlinedIcon/>
                        <span>Mensajes</span>
                    </div>
                    <div className="item">
                        <CardGiftcardOutlinedIcon/>
                        <span>Donaciones</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftBar