import Header from "./Header";
import netflixBg from '../assets/Netflix_Background_Image.jpg';

const Login = () => {
  return (
    <div>
      <Header />

      {/* Keep your original background image layout */}
      <div className="absolute">
        <img
          src={netflixBg}
          alt="Netflix background"
        />
      </div>

      {/* Centered form without affecting the background */}
      <form className="w-3/12 absolute p-12 bg-black/80 top-1/4 left-1/2 transform -translate-x-1/2 text-white rounded-md">
        <h1 className="font-bold text-3xl pb-6">Sign In</h1>

        <input
          type="text"
          placeholder="Email Address"
          className="p-3 mb-4 w-full text-black bg-gray-700 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 mb-6 w-full text-black bg-gray-700 rounded"
        />

        <button className="py-3 bg-red-600 text-white rounded lg w-full hover:bg-red-700 transition">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
