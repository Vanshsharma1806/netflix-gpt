import { auth } from "../utils/fireBase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { netflixLogo, profileIcon } from "../utils/constants";
const Header = () => { 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
  },[])

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      

    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className="absolute bg-gradient-to-b from-black w-full p-2 z-10 flex justify-between">
      <img className="h-14 mx-14   " src={netflixLogo}></img>

      {user && <div className="mr-4 flex">
        <img className="h-10 mx-1 " src={profileIcon}></img>
        <button className="text-white font-bold" onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  );
}

export default Header;