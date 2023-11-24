import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../../context/authContext";

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Usuario_1",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU",
    },
    {
      id: 2,
      name: "Usuario_2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU",
    },
    {
      id: 3,
      name: "Usuario_3",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU",
    },
    {
      id: 4,
      name: "Usuario_4",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories