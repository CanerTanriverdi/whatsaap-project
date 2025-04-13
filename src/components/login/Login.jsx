import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import upload from "../../lib/upload";

export default function Login() {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imgUrl = await upload(avatar.file);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("Account created! You can login now!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center w-full h-full gap-32 login">
      <div className="flex flex-col items-center flex-1 gap-5 item">
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
            type="password"
            placeholder="password"
            name="password"
          />
          <button
            disabled={loading}
            className="w-full px-4 py-2 border-none bg-[#1f8ef1] text-white rounded-md cursor-pointer font-normal
            disabled:cursor-not-allowed disabled:bg-[#1f8ff19c]"
          >
            {loading ? "Loading" : "Sign In"}
          </button>
        </form>
      </div>
      <div className="separator h-5/6 w-[2px] bg-[#dddddd35]"></div>
      <div className="flex flex-col items-center flex-1 gap-3 item">
        <h2>Create an Account</h2>
        <form
          onSubmit={handleRegister}
          className="flex flex-col items-center justify-center gap-3"
        >
          <label
            className="flex items-center justify-between w-full underline cursor-pointer"
            htmlFor="file"
          >
            <img
              className="object-cover w-12 h-12 rounded-lg opacity-60"
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
            type="password"
            placeholder="password"
            name="password"
          />
          <button
            disabled={loading}
            className="w-full px-4 py-2  border-none bg-[#1f8ef1] text-white rounded-md cursor-pointer font-normal
            disabled:cursor-not-allowed disabled:bg-[#1f8ff19c]"
          >
            {loading ? "Loading" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
