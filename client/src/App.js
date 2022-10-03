import logo from './logo.svg';
import {Home,Chat} from "./components/index"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import SocketIO from "socket.io-client"
const socket=SocketIO.connect("http://localhost:5000")

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home socket={socket}/>}/>
            <Route path="/chat" element={<Chat socket={socket}/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
