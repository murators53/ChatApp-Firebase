import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../firebase/Firebase';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    if (!email) return;

    sendPasswordResetEmail(auth, email)
      .then((res) => {
        alert("We have sent you a reset password email. Check your inbox. It may take 5 min.")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-3xl text-center border-b-4 border-b-pink-500 pb-2">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-full my-8">
        <input
          type="email"
          placeholder="Enter your mail"
          className="bg-slate-100 my-4 p-3 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="text-xl font-semibold bg-pink-400 p-3 rounded-md text-center"
        >
          Send reset password email
        </button>
        <Link
          className="text-sm font-semibold  my-2 rounded-md text-start"
          to='/sign-in'
        >
          Back to sign in
        </Link>
      </form>
    </div>
  );
}

export default ForgotPassword