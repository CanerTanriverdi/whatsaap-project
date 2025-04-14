import React from "react";
import { useUserStore } from "../../../lib/userStore";

export default function Userinfo() {
  const { currentUser } = useUserStore();

  return (
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center gap-3">
        <img
          className="object-cover w-12 h-12 rounded-full"
          src={currentUser.avatar || "./avatar.png"}
          alt="profile picture"
        />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="flex gap-3">
        <img
          className="w-5 h-5 cursor-pointer"
          src="./more.png"
          alt="more"
        />
        <img
          className="w-5 h-5 cursor-pointer"
          src="./video.png"
          alt="video"
        />
        <img
          className="w-5 h-5 cursor-pointer"
          src="./edit.png"
          alt="edit"
        />
      </div>
    </div>
  );
}
