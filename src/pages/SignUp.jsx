import React, { useCallback, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // account creating using email and password
import { auth } from "./../firebase/Firebase";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(email, password);
      if (!email || !password) return;

      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => updateProfile(res.user, {displayName: name}))//bu user upadet etmek istiyoruz
        //displayName ekleme alani name i secerek eklyoruz
        .catch((err) => console.log(err));
    },
    [name, email, password]
  );

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-3xl text-center border-b-4 border-b-blue-500 pb-2">
        Create new account
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-full my-8">
        <input
          type="text"
          placeholder="Enter your name"
          className="bg-slate-100 mt-4 p-3 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          className="bg-slate-100 my-4 p-3 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="text-xl font-semibold bg-blue-400 p-3 rounded-md text-center"
        >
          Submit
        </button>
        <Link
          className="text-sm font-semibold  my-2 rounded-md text-start"
          to="/sign-in"
        >
          Already have an account? Sign in
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
