import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../components/Posts/posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU"
          alt=""
          className="cover"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://Instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://pinterest.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Usuario_1</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>MX</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>sitio.com</span>
              </div>
            </div>
            <button>Seguir</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon className="item"/>
            <MoreVertIcon className="item"/>
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;