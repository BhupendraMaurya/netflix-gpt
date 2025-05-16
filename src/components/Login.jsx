import Header from "./Header";
import netflixBg from '../assets/Netflix_Background_Image.jpg';

const Login = () => {
    return <div>
        <Header/>
            <div><img
                src={netflixBg}
                alt="Netflix background"
                />
            </div>
        </div>;
};
export default Login;