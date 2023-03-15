import React from "react";
import { IoMdAttach } from "react-icons/io";
import { RiImageAddLine } from "react-icons/ri";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <IoMdAttach
          style={{ width: "24px", height: "24px", cursor: "pointer",color:'gray' }}
        />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <RiImageAddLine
            style={{
              marginTop:'5px',
              width: "24px",
              height: "24px",
              cursor: "pointer",
              padding: "0px",
              color:'gray'
            }}
          />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
