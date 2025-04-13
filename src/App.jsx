import { auth } from "./lib/firebase";
import { useEffect } from "react";
import { useUserStore } from "./lib/userStore";
import { onAuthStateChanged } from "firebase/auth";

import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Detail from "./components/detail/Detail";
import Notification from "./components/notification/Notification";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserInfo(user.uid);
      } else {
        fetchUserInfo(null);
      }
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center bg-[url('./benim.svg')] bg-cover bg-center min-h-screen text-white">
        <div className="p-5 text-4xl font-bold rounded-full">Loading...</div>
      </div>
    );

  return (
    <div className="flex justify-center items-center bg-[url('./benim.svg')] bg-cover bg-center min-h-screen text-white">
      <div className="flex w-11/12 max-w-screen-2xl h-[90vh] bg-[rgba(17,25,40,0.75)] backdrop-blur-[8px] backdrop-saturate-[180%] rounded-[12px] border border-[rgba(255,255,255,0.125)]">
        {currentUser ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (
          <Login />
        )}
        <Notification />
      </div>
    </div>
  );
};

export default App;
