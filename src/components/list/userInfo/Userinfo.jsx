import React from "react";

export default function Userinfo() {
  return (
    <div className="flex p-3 items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          className="w-[50px] h[50px] rounded-full object-cover"
          src="./avatar.png"
          alt=""
        />
        <h2>Caner</h2>
      </div>
      <div className="flex gap-3">
        <img
          className="w-[20px] h-[20px] cursor-pointer"
          src="./more.png"
          alt=""
        />
        <img
          className="w-[20px] h-[20px] cursor-pointer"
          src="./video.png"
          alt=""
        />
        <img
          className="w-[20px] h-[20px] cursor-pointer"
          src="./edit.png"
          alt=""
        />
      </div>
    </div>
  );
}
