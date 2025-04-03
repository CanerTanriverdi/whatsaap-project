import React from "react";
import Userinfo from "./userInfo/Userinfo";
import Chatlist from "./chatList/Chatlist";

export default function List() {
  return (
    <div className="flex flex-1 flex-col">
      <Userinfo />
      <Chatlist />
    </div>
  );
}
