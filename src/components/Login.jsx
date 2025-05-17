import Header from "./Header";
import netflixBg from '../assets/Netflix_Background_Image.jpg';
import { useState } from "react";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState();

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  };

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
        <h1 className="font-bold text-3xl pb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>


        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-3 mb-6 w-full text-black bg-gray-700 rounded"
        />}

        
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
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <>
              New to Netflix? <span className="font-bold cursor-pointer">Sign Up Now</span>
            </>
          ) : (
            <>
              Already a user? <span className="font-bold cursor-pointer">Sign In</span>
            </>
          )}
        </p>

      </form>
    </div>
  );
};

export default Login;
