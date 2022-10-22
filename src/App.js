import "./App.css";
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import { userContext } from "./context";

function App() {
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();
  const [isConnected, setIsConnected] = useState(false);
  const [discuss, setDiscuss] = useState();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsConnected(true);
      setToken(localStorage.getItem("token"));
      setUserId(localStorage.getItem("userId"));
    }
  }, [isConnected]);

  return (
    <userContext.Provider
      value={{ setIsConnected, token, userId, discuss, setDiscuss }}
    >
      <div className="App">{!isConnected ? <Home /> : <Main />}</div>
    </userContext.Provider>
  );
}

export default App;
