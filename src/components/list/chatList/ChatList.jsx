import React, { useEffect, useState } from "react";
import AddUser from "./addUser/addUser";
import { db } from "../../../lib/firebase";
import { doc, onSnapshot, getDoc, updateDoc } from "firebase/firestore";
import { useUserStore } from "../../../lib/userStore";
import { useChatStore } from "../../../lib/chatStore";

export default function Chatlist() {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const { currentUser } = useUserStore();
  const { chatId, changeChat } = useChatStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
      const items = res.data().chats;

      const promisses = items.map(async (item) => {
        const userDocRef = doc(db, "users", item.receiverId);
        const userDocSnap = await getDoc(userDocRef);

        const user = userDocSnap.data();

        return { ...item, user };
      });

      const chatData = await Promise.all(promisses);

      setChats(chatData.sort((a, b) => b.updateAt - a.updateAt));
    });

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  const handleSelect = async (chat) => {
    const userChats = chats.map((item) => {
      const { user, ...rest } = item;
      return rest;
    });

    const chatIndex = userChats.findIndex((item) => item.chatId === chat.chatId);

    userChats[chatIndex].isSeen = true;

    const userChatsRef = doc(db, "userchats", currentUser.id);

    try {
      await updateDoc(userChatsRef, { chats: userChats });
      changeChat(chat.chatId, chat.user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="flex flex-col p-3">
        {/* Search bar */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex flex-1 bg-[rgba(17,25,40,0.5)] gap-3 items-center rounded-lg p-2">
            <img
              className="w-5 h-5"
              src="./search.png"
              alt="search"
            />
            <input
              className="flex-1 text-white bg-transparent border-none outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="bg-[rgba(17,25,40,0.5)] p-2 cursor-pointer rounded-lg">
            <img
              className="w-5 h-5"
              src={addMode ? "./minus.png" : "./plus.png"}
              alt="add"
              onClick={() => setAddMode((prev) => !prev)}
            />
          </div>
        </div>

        {/* Chat list*/}
        <div>
          {chats.map((chat) => (
            <div
              className="flex items-center gap-3 p-3 cursor-pointer border-b border-b-[#dddddd35]"
              key={chat.chatId}
              onClick={() => handleSelect(chat)}
              style={{ backgroundColor: chat?.isSeen ? "transparent" : "#5183fe" }}
            >
              <img
                className="object-cover w-12 h-12 rounded-full"
                src={chat.user.avatar || "./avatar.png"}
                alt="profile picture"
              />
              <div className="flex flex-col gap-1">
                <span className="font-medium">{chat.user.username}</span>
                <p className="text-xs font-light">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {addMode && <AddUser />}
    </div>
  );
}
