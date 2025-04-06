import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login w-full h-full flex items-center gap-32">
      <div className="item flex flex-1 flex-col items-center gap-5">
        <h2>Welcome back</h2>
        <form
          className="flex flex-col items-center justify-center gap-4"
          onSubmit={handleLogin}
        >
          <input
            className="p-3 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
            type="text"
            placeholder="Email"
            name="email"
          />
          <input
            className="p-3 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
            type="text"
            placeholder="password"
            name="password"
          />
          <button className="w-full px-4 py-2 border-none bg-[#1f8ef1] text-white rounded-md cursor-pointer font-normal">
            Sign In
          </button>
        </form>
      </div>
      <div className="separator h-5/6 w-[2px] bg-[#dddddd35]"></div>
      <div className="item flex flex-1 flex-col items-center gap-3">
        <h2>Create an Account</h2>
        <form className="flex flex-col items-center justify-center gap-3">
          <label
            className="w-full flex items-center justify-between cursor-pointer underline"
            htmlFor="file"
          >
            <img
              className="w-12 h-12 rounded-lg object-cover opacity-60"
              src={avatar.url || "./avatar.png"}
              alt=""
            />
            Upload an image
          </label>
          <input
            className="p-3 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input
            className="p-3 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
            type="text"
            placeholder="Username"
            name="username"
          />
          <input
            className="p-3 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
            type="text"
            placeholder="Email"
            name="email"
          />
          <input
            className="p-3 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
            type="text"
            placeholder="password"
            name="password"
          />
          <button className="w-full px-4 py-2  border-none bg-[#1f8ef1] text-white rounded-md cursor-pointer font-normal">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
