import "./home.scss"
import Posts from "../components/Posts/posts";
import Stories from "../components/stories/stories";

const Home = () => {
    return (
        <div className="home">
            <Stories/>
            <Posts/>
        </div>
    );
};

export default Home