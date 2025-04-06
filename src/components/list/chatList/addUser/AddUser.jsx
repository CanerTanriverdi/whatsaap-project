import React from "react";

export default function AddUser() {
  return (
    <div className="adduser p-7 bg-[rgba(17,25,40,0.781)] rounded-lg absolute top-0 bottom-0 left-0 right-0 m-auto w-max h-max">
      <form className="flex gap-5">
        <input
          className="px-5 py-2 text-gray-500 rounded-lg border-none outline-none"
          type="text"
          placeholder="Username"
          name="username"
        />
        <button className="px-5 py-2 rounded-lg bg-[#1a73e8] text-white border-none cursor-pointer">Search</button>
      </form>
      <div className="user mt-12 flex items-center justify-between">
        <div className="detail flex items-center gap-5 ">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <span>caner</span>
        </div>
        <button className="px-3 py-2 rounded-lg bg-[#1a73e8] text-white border-none cursor-pointer">Add user</button>
      </div>
    </div>
  );
}
