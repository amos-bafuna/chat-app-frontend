import React from "react";
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import { userContext } from "./context";
import { io } from "socket.io-client";
import "./App.css";

function App() {
  const socket = io.connect(process.env.REACT_APP_API_URL);

  const [token, setToken] = useState();
  const [userId, setUserId] = useState();
  const [isConnected, setIsConnected] = useState(false);
  const [discuss, setDiscuss] = useState([]);
  const [allUsers, setAllUsers] = useState();
  const [discussID, setDiscussId] = useState();
  const [loading, setLoading] = useState();
  const [sendMessageLoading, setSendMessageLoading] = useState();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsConnected(true);
      setToken(localStorage.getItem("token"));
      setUserId(localStorage.getItem("userId"));
    }
  }, [isConnected, userId]);

  return (
    <userContext.Provider
      value={{
        setIsConnected,
        token,
        userId,
        discuss,
        setDiscuss,
        allUsers,
        setAllUsers,
        socket,
        discussID,
        setDiscussId,
        loading,
        setLoading,
        sendMessageLoading,
        setSendMessageLoading,
      }}
    >
      <div className="App">{isConnected ? <Main /> : <Home />}</div>
    </userContext.Provider>
  );
}

export default App;
