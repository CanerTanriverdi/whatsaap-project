import React, { useState } from "react";
import { db } from "../../../../lib/firebase";
import {
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
  doc,
  setDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import { useUserStore } from "../../../../lib/userStore";

export default function AddUser() {
  const [user, setUser] = useState(null);

  const { currentUser } = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapShot = await getDocs(q);
      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    try {
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      await updateDoc(doc(userChatsRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });

      await updateDoc(doc(userChatsRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="adduser p-7 bg-[rgba(17,25,40,0.781)] rounded-lg absolute top-0 bottom-0 left-0 right-0 m-auto w-max h-max">
      <form
        onSubmit={handleSearch}
        className="flex gap-5"
      >
        <input
          className="px-5 py-2 text-gray-500 border-none rounded-lg outline-none"
          type="text"
          placeholder="Username"
          name="username"
        />
        <button className="px-5 py-2 rounded-lg bg-[#1a73e8] text-white border-none cursor-pointer">Search</button>
      </form>
      {user && (
        <div className="flex items-center justify-between mt-12 user">
          <div className="flex items-center gap-5 detail ">
            <img
              className="object-cover w-12 h-12 rounded-full"
              src={user.avatar || "./avatar.png"}
              alt="profile picture"
            />
            <span>{user.username}</span>
          </div>
          <button
            onClick={handleAdd}
            className="px-3 py-2 rounded-lg bg-[#1a73e8] text-white border-none cursor-pointer"
          >
            Add user
          </button>
        </div>
      )}
    </div>
  );
}
