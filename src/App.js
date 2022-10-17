import "./App.css";
//import Home from "./components/Home/Home";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
const socket = new WebSocket("ws://localhost:3000");

socket.addEventListener("open", () => {
  // envoi d'un message au serveur
  socket.send(
    JSON.stringify({
      type: "bonjour du client",
      content: [3, "4"],
    })
  );
});
