import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/Firebase";

const ref = collection(db, "posts");

const AddPost = () => {
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(ref, {
      body: body,
    });
  };

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="What are you working on"
          className="bg-gray-100 p-4 rounded-t-md"
          value={body}
          onChange={(e) => setBody(e.currentTarget.value)}
        />
        <input
          type="submit"
          value="Send"
          className="bg-pink-400 p-4 rounded-b-md"
        />
      </form>
    </div>
  );
};

export default AddPost;
