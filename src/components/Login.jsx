import Header from "./Header";
import netflixBg from '../assets/Netflix_Background_Image.jpg';
import { useState, useRef } from "react";
import {checkValidData}from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import {signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{

    // validate the form data

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) {
      return;
    }

    // Sign In / Sign Up
    if(!isSignInForm){
      // sign up logic.
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-"+ errorMessage);
        
      });

    }
    else{
      // sign in logic.
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        

        setErrorMessage(errorCode+ "-"+errorMessage);
        
      });

    }

    

  }

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
      <form onSubmit={(e) => e.preventDefault()}className="w-3/12 absolute p-12 bg-black/80 top-1/4 left-1/2 transform -translate-x-1/2 text-white rounded-md">
        <h1 className="font-bold text-3xl pb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>


        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 mb-6 w-full text-black bg-gray-700 rounded"
          />
        )}


        <input
          ref = {email}
          type="text"
          placeholder="Email Address"
          className="p-3 mb-4 w-full text-black bg-gray-700 rounded"
        />

        <input
          ref = {password}
          type="password"
          placeholder="Password"
          className="p-3 mb-6 w-full text-black bg-gray-700 rounded"
        /> 
        {errorMessage && (
            <p className="text-red-500 text-sm mb-4 -mt-4">{errorMessage}</p>
        )}

        <button
            className="py-3 bg-red-600 text-white rounded w-full hover:bg-red-700 transition"
            onClick={handleButtonClick}
          >
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
