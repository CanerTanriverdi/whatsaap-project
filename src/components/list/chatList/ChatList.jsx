import React, { useState } from "react";

export default function Chatlist() {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="flex-[1] overflow-scroll">
      <div className="flex items-center gap-3 p-3">
        <div className="flex flex-[1]  bg-[rgba(17,25,40,0.5)] gap-3 items-center rounded-[10px] p-2">
          <img
            className="w-[20px] h-[20px]"
            src="./search.png"
            alt=""
          />
          <input
            className="border-none bg-transparent outline-none text-white flex-1"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="bg-[rgba(17,25,40,0.5)] p-2 cursor-pointer rounded-[10px]">
          <img
            className="w-{20px] h-[20px]"
            src={addMode ? "./minus.png" : "./plus.png"}
            alt=""
            onClick={() => setAddMode((prev) => !prev)}
          />
        </div>
      </div>
      <div className="flex item center gap-3 p-3 cursor-pointe border-b border-b-[#dddddd35]">
        <img
          className="w-[50px] h-[50px] rounded-full object-cover"
          src="./avatar.png "
          alt=""
        />
        <div className="flex flex-col gap-1">
          <span className="font-medium ">caner</span>
          <p className="text-[14px] font-light">Hello</p>
        </div>
      </div>
      <div className="flex item center gap-3 p-3 cursor-pointe border-b border-b-[#dddddd35]">
        <img
          className="w-[50px] h-[50px] rounded-full object-cover"
          src="./avatar.png "
          alt=""
        />
        <div className="flex flex-col gap-1">
          <span className="font-medium ">caner</span>
          <p className="text-[14px] font-light">Hello</p>
        </div>
      </div>
      <div className="flex item center gap-3 p-3 cursor-pointe border-b border-b-[#dddddd35]">
        <img
          className="w-[50px] h-[50px] rounded-full object-cover"
          src="./avatar.png "
          alt=""
        />
        <div className="flex flex-col gap-1">
          <span className="font-medium ">caner</span>
          <p className="text-[14px] font-light">Hello</p>
        </div>
      </div>
    </div>
  );
}
