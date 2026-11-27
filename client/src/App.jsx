
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ChatWidget from "./components/chatbot/ChatWidget";
import "./styles/public.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <ChatWidget />
    </BrowserRouter>
  );
}

export default App;