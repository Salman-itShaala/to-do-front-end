import React from "react";
import "./userInfo.css";
function UserInfo() {
  return (
    <div className="userInfo">
      <img src="./s_email.logo.jpg" alt="" />
      <p>{localStorage.getItem("username") || "Guest User"}</p>
    </div>
  );
}

export default UserInfo;
