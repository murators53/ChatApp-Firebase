import React from "react";

export default function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hasbihal Chat</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img src="https://www.svgrepo.com/show/475030/add-image.svg" alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account?</p>
      </div>
    </div>
  );
}
