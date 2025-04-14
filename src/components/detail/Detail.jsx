import React from "react";
import { auth } from "../../lib/firebase";

export default function Detail() {
  return (
    <div className="flex-1">
      <div className="user flex flex-col items-center px-4 py-3 gap-3 border-b border-b-[#dddddd35] ">
        <img
          className="object-cover w-24 h-24 rounded-full"
          src="./avatar.png"
          alt=""
        />
        <h2>Caner Tanriverdi</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="flex flex-col gap-2 p-3 info">
        <div className="option">
          <div className="flex items-center justify-between title">
            <span>Chat Settings</span>
            <img
              className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-2 rounded-full cursor-pointer"
              src="./arrowUp.png"
              alt=""
            />
          </div>
        </div>
        <div className="option">
          <div className="flex items-center justify-between title">
            <span>Chat Settings</span>
            <img
              className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-2 rounded-full cursor-pointer"
              src="./arrowUp.png"
              alt=""
            />
          </div>
        </div>
        <div className="option">
          <div className="flex items-center justify-between title">
            <span>Privacy % help</span>
            <img
              className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-2 rounded-full cursor-pointer"
              src="./arrowUp.png"
              alt=""
            />
          </div>
        </div>
        <div className="option">
          <div className="flex items-center justify-between title">
            <span>Share photos</span>
            <img
              className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-2 rounded-full cursor-pointer"
              src="./arrowDown.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3 mt-3 photos">
            <div className="flex items-center justify-between photoItem ">
              <div className="flex items-center gap-3 photoDetail">
                <img
                  className="object-cover w-10 h-10 rounded"
                  src="https://images.pexels.com/photos/31246541/pexels-photo-31246541/free-photo-of-beautiful-cherry-blossoms-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <span className="text-sm font-light text-gray-400">photo_2025_2.png</span>
              </div>
              <img
                className="w-7 h-7 p-2 cursor-pointer rounded-md object-cover bg-[rgba(17,25,40,0.3)]"
                src="./download.png"
                alt=""
              />
            </div>
            <div className="flex items-center justify-between photoItem ">
              <div className="flex items-center gap-3 photoDetail">
                <img
                  className="object-cover w-10 h-10 rounded"
                  src="https://images.pexels.com/photos/31246541/pexels-photo-31246541/free-photo-of-beautiful-cherry-blossoms-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <span className="text-sm font-light text-gray-400">photo_2025_2.png</span>
              </div>
              <img
                className="w-7 h-7 p-2 cursor-pointer rounded-md object-cover bg-[rgba(17,25,40,0.3)]"
                src="./download.png"
                alt=""
              />
            </div>
            <div className="flex items-center justify-between photoItem ">
              <div className="flex items-center gap-3 photoDetail">
                <img
                  className="object-cover w-10 h-10 rounded"
                  src="https://images.pexels.com/photos/31246541/pexels-photo-31246541/free-photo-of-beautiful-cherry-blossoms-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <span className="text-sm font-light text-gray-400">photo_2025_2.png</span>
              </div>
              <img
                className="w-7 h-7 p-2 cursor-pointer rounded-md object-cover bg-[rgba(17,25,40,0.3)]"
                src="./download.png"
                alt=""
              />
            </div>
            <div className="flex items-center justify-between photoItem ">
              <div className="flex items-center gap-3 photoDetail">
                <img
                  className="object-cover w-10 h-10 rounded"
                  src="https://images.pexels.com/photos/31246541/pexels-photo-31246541/free-photo-of-beautiful-cherry-blossoms-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <span className="text-sm font-light text-gray-400">photo_2025_2.png</span>
              </div>
              <img
                className="w-7 h-7 p-2 cursor-pointer rounded-md object-cover bg-[rgba(17,25,40,0.3)]"
                src="./download.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="flex items-center justify-between title">
            <span>Shared Files</span>
            <img
              className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-2 rounded-full cursor-pointer"
              src="./arrowUp.png"
              alt=""
            />
          </div>
        </div>
        <button className="px-2 py-2 bg-[rgba(230,74,105,0.35)] text-white border-none rounded-md cursor-pointer hover:bg-[rgba(220,20,60,0.796)]">
          Block User
        </button>
        <button
          onClick={() => auth.signOut()}
          className="px-2 py-2 bg-[rgba(26,115,232,0.35)] text-white border-none rounded-md cursor-pointer hover:bg-[rgba(26,115,232,0.85)]"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
