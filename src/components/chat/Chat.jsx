import React, { useState, useRef, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import upload from "../../lib/upload";

export default function Chat() {
  const [chat, setChat] = useState();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [img, setImg] = useState({
    file: null,
    url: "",
  });

  const { currentUser } = useUserStore();
  const { chatId, user } = useChatStore();

  const inputRef = useRef();
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  const handleEmoji = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
    setOpen(false);
    inputRef.current?.focus();
  };

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleSend = async () => {
    if (text === "") return;

    let imgUrl = null;

    try {
      if (img.file) {
        imgUrl = await upload(img.file);
      }

      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
          ...(imgUrl && { img: imgUrl }),
        }),
      });

      const userIDs = [currentUser.id, user.id];

      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db, "userchats", id);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex((c) => c.chatId === chatId);

          userChatsData.chats[chatIndex].lastMessage = text;
          userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false;
          userChatsData.chats[chatIndex].updatedAt = Date.now();

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });
    } catch (err) {
      console.log(err);
    }

    setImg({
      file: null,
      url: "",
    });

    setText("");
  };

  return (
    <div className="flex flex-col flex-[2] border-l border-r border-l-[#dddddd35] border-r-[#dddddd35] h-full">
      <div className="top flex p-3 items-center justify-between border-b border-b-[#dddddd35]">
        <div className="flex items-center gap-3 user">
          <img
            className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full object-cover"
            src="./avatar.png"
            alt="User avatar"
          />
          <div className="flex flex-col gap-0 texts">
            <span className="text-[18px] font-bold">caner tanriverdi</span>
            <p className="text-[15px] font-extralight text-[#a5a5a5]">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="flex gap-4 icons">
          <img
            className="w-4 h-4 cursor-pointer sm:w-5 sm:h-5"
            src="./phone.png"
            alt="Phone"
          />
          <img
            className="w-4 h-4 cursor-pointer sm:w-5 sm:h-5"
            src="./video.png"
            alt="Video"
          />
          <img
            className="w-4 h-4 cursor-pointer sm:w-5 sm:h-5"
            src="./info.png"
            alt="Info"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-5 p-5 overflow-auto center">
        {chat?.messages?.map((message) => {
          // Bu mesaj bana mı ait?
          const isOwner = message.senderId === currentUser.id;

          return (
            <div
              key={message.createdAt}
              className={`message flex gap-2 max-w-[80%] ${isOwner ? "ml-auto flex-row-reverse" : ""}`}
            >
              {message.img && (
                <img
                  className="w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-full object-cover"
                  src="./avatar.png"
                  alt="User"
                />
              )}

              <div className="flex flex-col flex-1 gap-1 max-w-[%80] texts">
                {message.img && (
                  <img
                    src={message.img}
                    alt="Shared media"
                  />
                )}
                <p
                  className={`text-sm p-2 rounded-lg ${
                    isOwner ? "bg-[#5183fe] text-white" : "bg-[rgba(52,53,65,0.6)] text-white"
                  }`}
                >
                  {message.text}
                </p>
                {/* <span>{message}</span> */}
              </div>
            </div>
          );
        })}

        {img.url && (
          <div className="message own">
            <div className="text">
              <img
                src={img.url}
                alt=""
              />
            </div>
          </div>
        )}
        <div ref={endRef}></div>
      </div>

      <div className="bottom flex p-5 items-center justify-between border-t border-t-[#dddddd35] gap-3 mt-auto">
        <div className="flex gap-5 icons">
          <label htmlFor="file">
            <img
              className="w-5 h-5 sm:w-[20px] sm:h-[20px] cursor-pointer"
              src="./img.png"
              alt="Upload"
            />
          </label>
          <input
            id="file"
            type="file"
            style={{ display: "none" }}
            onChange={handleImg}
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

        <div className="relative emoji">
          <img
            className="w-5 h-5 cursor-pointer"
            src="./emoji.png"
            alt="Emoji"
            onClick={() => setOpen((prev) => !prev)}
          />
          {open && (
            <div className="picker absolute bottom-[60px] right-0 z-50">
              <EmojiPicker
                onEmojiClick={handleEmoji}
                theme="dark"
                height={350}
              />
            </div>
          )}
        </div>

        <button
          onClick={handleSend}
          className="bg-[#5183fe] text-white text-sm px-2 py-1 sm:px-3 sm:py-1 rounded-[5px] cursor-pointer border-none"
        >
          Send
        </button>
      </div>
    </div>
  );
}
