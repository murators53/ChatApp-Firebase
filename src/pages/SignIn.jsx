import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"; // signin using email and password
import { auth } from "./../firebase/Firebase";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (!email || !password) return;

    signInWithEmailAndPassword(auth, email, password)
      // .then((res) => alert("You have sign up"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-3xl text-center border-b-4 border-b-green-500 pb-2">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-full my-8">
        <input
          type="email"
          placeholder="Enter your mail"
          className="bg-slate-100 mt-4 p-3 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="bg-slate-100 mt-4 p-3 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link
          className="text-sm font-semibold my-3 rounded-md text-end"
          to='/forgot-password'
        >
          Forgot your password?
        </Link>
        <button
          type="submit"
          className="text-xl font-semibold bg-green-400 p-3 rounded-md text-center"
        >
          Sign in
        </button>
        <Link
          className="text-sm font-semibold  my-2 rounded-md text-start"
          to='/sign-up'
        >
          Don't have an account? Sign up
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
