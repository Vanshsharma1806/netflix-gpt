import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsSignIn(!isSignIn);
  }

  const handleBtnClick = () => {
    const msg =checkValidData(email.current.value, password.current.value);
    setErrorMessage(msg);

    if(msg) return;

    if(!isSignIn){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value
        }).then(() => {
          const {uid, email, displayName} = auth.currentUser;
          dispatch(addUser({uid:user.uid, email:user.email, displayName:name.current.value}));
          navigate("/browse");
        }).catch((error) => {
          // An error occurred
          // ...
        });
      
        console.log(user);  
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/browse");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
  }

  return (
    <div>
      <Header/>

      <div className="absolute ">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"></img>
      </div>

      <form onSubmit={(e)=>{e.preventDefault()}} className=" bg-black absolute p-12 w-1/3  my-36 mx-auto left-0 right-0 bg-opacity-80 text-white">
        <h1 className="text-3xl  font-bold m-2 mb-4 " >{isSignIn?"Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input ref={name} type="Name" placeholder="Full Name" className="p-4  bg-gray-950 border border-gray-400 rounded-lg m-2 my-2 w-full"></input>}
        <input ref={email} type="email" placeholder="Email" className="p-4  bg-gray-950 border border-gray-400 rounded-lg m-2 my-2 w-full"></input>
        <input ref={password} type="password" placeholder="Password" className="p-4 m-2 my-2   bg-gray-950 border border-gray-400 rounded-lg  w-full"></input>
        <p className="text-red-600 m-2 font-bold"> {errorMessage}</p>
        <button onClick={handleBtnClick} className="bg-red-600 rounded-md w-full text-white font-bold m-2 my-2 p-2">{isSignIn?"Sign In" : "Sign Up"}</button>
        {isSignIn && (
          <label className="">
            <input type="checkbox" className="w-4 mt-6 accent-gray-500  h-4 m-2" />
            <span className="text-lg text-white   mt-6 ">Remember Me</span>
          </label>
        )}
        <p className="cursor-pointer m-2 my-4 " onClick={handleClick}>{isSignIn ?"New to Netflix? Sign Up now." : " Already a User? Sign In now"}</p>
      </form>
    </div>
  );
}

export default Login;