import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to='sign-up' className="bg-green-400 p-2 w-24 my-1 flex flex-row rounded-md justify-center ">
        Sign in
      </Link>
      <Link className="bg-blue-400 p-2 w-24 my-1 flex flex-row rounded-md justify-center ">
        Sign up
      </Link>
    </div>
  );
};

export default Header;
