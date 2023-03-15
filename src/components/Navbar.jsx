import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser)
  return (
    <div className="navbar">
      <span className="logo">Hasbihal Chat</span>
      <div className="user">
        <span>{currentUser.displayName}</span>
        <img src={currentUser.photoURL} alt="" />
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
