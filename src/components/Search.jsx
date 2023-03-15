import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user"/>
      </div>
      <div className="userChat">
        <img src="images/avatar.jpg" alt="" />
        <div className="userChatInfo">
          <span>Kemal</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
