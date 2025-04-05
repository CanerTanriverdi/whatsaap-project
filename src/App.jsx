import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";

const App = () => {
  const user = true;

  return (
    <div className="flex justify-center items-center bg-[url('./benim.svg')] bg-cover bg-center min-h-screen text-white">
      <div className="flex w-11/12 max-w-screen-2xl h-[90vh] bg-[rgba(17,25,40,0.75)] backdrop-blur-[8px] backdrop-saturate-[180%] rounded-[12px] border border-[rgba(255,255,255,0.125)]">
        {user ? (
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
