import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";

const App = () => {
  return (
    <div className="flex justify-center items-center bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen text-white">
      <div className="flex w-[90vw] h-[90vh] bg-[rgba(17,25,40,0.75)] backdrop-blur-[10px] backdrop-saturate-[180%] rounded-[12px] border border-[rgba(255,255,255,0.125)]">
        <List />
        <Chat />
        <Detail />
      </div>
    </div>
  );
};

export default App;
