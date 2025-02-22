import { auth } from "../utils/fireBase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => { 
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");

    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className="absolute bg-gradient-to-b from-black w-full  p-4 z-10 flex justify-between">
      <img className="w-48 mx-14   " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"></img>

      {user && <div className="mr-4 flex">
        <img className="h-14 mx-1 " src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"></img>
        <button className="text-white font-bold" onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  );
}

export default Header;