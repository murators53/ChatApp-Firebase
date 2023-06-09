import React, { useContext } from "react";
import { AiTwotoneVideoCamera } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  console.log(data.user);
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="lefttitle">
          <img src={data.user.photoURL} alt="" />
          <span>{data.user?.displayName}</span>
        </div>
        <div className="chatIcons">
          <AiTwotoneVideoCamera style={{ height: "24px", cursor: "pointer" }} />
          <FaUserAlt style={{ height: "24px", cursor: "pointer" }} />
          <FiMoreHorizontal style={{ height: "24px", cursor: "pointer" }} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
