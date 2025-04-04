import React, { useState, useRef, useEffect } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const inputRef = useRef();
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  const handleEmoji = (emoji) => {
    setText((prev) => prev + emoji.native);
    setOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col flex-[2] border-l border-r border-l-[#dddddd35] border-r-[#dddddd35] h-full">
      <div className="top flex p-3 items-center justify-between border-b border-b-[#dddddd35]">
        <div className="user flex items-center gap-3">
          <img
            className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full object-cover"
            src="./avatar.png"
            alt="User avatar"
          />
          <div className="texts flex flex-col gap-0">
            <span className="text-[18px] font-bold">caner tanriverdi</span>
            <p className="text-[15px] font-extralight text-[#a5a5a5]">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons flex gap-4">
          <img
            className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
            src="./phone.png"
            alt="Phone"
          />
          <img
            className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
            src="./video.png"
            alt="Video"
          />
          <img
            className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
            src="./info.png"
            alt="Info"
          />
        </div>
      </div>

      <div className="center flex flex-col p-5 gap-5 flex-1 overflow-auto">
        <div className="message OWN flex max-w-[80%] self-end">
          <div className="texts flex flex-1 flex-col gap-1">
            <p className="bg-[#5183fe] rounded-lg text-sm p-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi corporis cumque deleniti quaerat obcaecati
              quasi assumenda a similique accusantium dolorem doloremque, qui totam eveniet quisquam reprehenderit ad
              earum eaque libero!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>

        <div className="message YOU flex gap-2 max-w-[80%]">
          <img
            className="w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-full object-cover"
            src="./avatar.png"
            alt="User"
          />
          <div className="texts flex flex-1 flex-col gap-1">
            <p className="text-sm p-2 rounded-lg bg-[rgba(17,25,40,0.3)]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi corporis cumque deleniti quaerat obcaecati
              quasi assumenda a similique accusantium dolorem doloremque, qui totam eveniet quisquam reprehenderit ad
              earum eaque libero!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>

        <div className="message OWN flex max-w-[80%] self-end">
          <div className="texts flex flex-1 flex-col gap-1">
            <p className="bg-[#5183fe] rounded-lg text-sm p-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi corporis cumque deleniti quaerat obcaecati
              quasi assumenda a similique accusantium dolorem doloremque, qui totam eveniet quisquam reprehenderit ad
              earum eaque libero!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>

        <div className="message YOU flex gap-2 max-w-[80%]">
          <img
            className="w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-full object-cover"
            src="./avatar.png"
            alt="User"
          />
          <div className="texts flex flex-1 flex-col gap-1">
            <p className="text-sm p-2 rounded-lg bg-[rgba(17,25,40,0.3)]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi corporis cumque deleniti quaerat obcaecati
              quasi assumenda a similique accusantium dolorem doloremque, qui totam eveniet quisquam reprehenderit ad
              earum eaque libero!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>

        <div className="message OWN flex max-w-[80%] self-end">
          <div className="texts flex flex-1 flex-col gap-1">
            <p className="bg-[#5183fe] rounded-lg text-sm p-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi corporis cumque deleniti quaerat obcaecati
              quasi assumenda a similique accusantium dolorem doloremque, qui totam eveniet quisquam reprehenderit ad
              earum eaque libero!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>

        <div className="message YOU flex gap-2 max-w-[80%]">
          <img
            className="w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-full object-cover"
            src="./avatar.png"
            alt="User"
          />
          <div className="texts flex flex-1 flex-col gap-1">
            <p className="text-sm p-2 rounded-lg bg-[rgba(17,25,40,0.3)]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi corporis cumque deleniti quaerat obcaecati
              quasi assumenda a similique accusantium dolorem doloremque, qui totam eveniet quisquam reprehenderit ad
              earum eaque libero!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>

        <div className="message OWN flex max-w-[80%] self-end">
          <div className="texts flex flex-1 flex-col gap-1">
            <p className="bg-[#5183fe] rounded-lg text-sm p-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi corporis cumque deleniti quaerat obcaecati
              quasi assumenda a similique accusantium dolorem doloremque, qui totam eveniet quisquam reprehenderit ad
              earum eaque libero!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>

        <div className="message YOU flex gap-2 max-w-[80%]">
          <img
            className="w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-full object-cover"
            src="./avatar.png"
            alt="User"
          />
          <div className="texts flex flex-1 flex-col gap-1">
            <img
              src="https://images.pexels.com/photos/23369004/pexels-photo-23369004/free-photo-of-heron-flying-above-a-cherry-blossom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Shared media"
            />
            <p className="text-sm p-2 rounded-lg bg-[rgba(17,25,40,0.3)]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi corporis cumque deleniti quaerat obcaecati
              quasi assumenda a similique accusantium dolorem doloremque, qui totam eveniet quisquam reprehenderit ad
              earum eaque libero!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom flex p-5 items-center justify-between border-t border-t-[#dddddd35] gap-3 mt-auto">
        <div className="icons flex gap-5">
          <img
            className="w-5 h-5 sm:w-[20px] sm:h-[20px] cursor-pointer"
            src="./img.png"
            alt="Upload"
          />
          <img
            className="w-5 h-5 sm:w-[20px] sm:h-[20px] cursor-pointer"
            src="./camera.png"
            alt="Camera"
          />
          <img
            className="w-5 h-5 sm:w-[20px] sm:h-[20px] cursor-pointer"
            src="./mic.png"
            alt="Mic"
          />
        </div>
        <input
          ref={inputRef}
          className="flex-1 bg-[rgba(17,25,40,0.5)] border-none outline-none text-white text-sm p-2 sm:p-[10px] rounded-[10px]"
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji relative">
          <img
            className="w-5 h-5 cursor-pointer"
            src="./emoji.png"
            alt="Emoji"
            onClick={() => setOpen((prev) => !prev)}
          />
          {open && (
            <div className="picker absolute bottom-[60px] right-0 z-50">
              <Picker
                data={data}
                onEmojiSelect={handleEmoji}
                theme="dark"
                previewPosition="none"
                maxFrequentRows={0}
              />
            </div>
          )}
        </div>
        <button className="bg-[#5183fe] text-white text-sm px-2 py-1 sm:px-3 sm:py-1 rounded-[5px] cursor-pointer border-none">
          Send
        </button>
      </div>
    </div>
  );
}
