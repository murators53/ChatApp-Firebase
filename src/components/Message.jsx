import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="images/avatar.jpg" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://avatars.githubusercontent.com/u/108583086?v=4" alt="" />
      </div>
    </div>
  );
};

export default Message;
