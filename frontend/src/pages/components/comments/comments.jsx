import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Usuario_1",
      userId: 1,
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Usuario_2",
      userId: 2,
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBVhb_zZI2S4rt98hZp4i8bAgD3XE06_CAw&usqp=CAU",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;