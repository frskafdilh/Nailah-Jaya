
import { useState } from "react";
import ChatMessage from "./ChatMessage";
import QuickQuestions from "./QuickQuestions";
import { getBotReply } from "../../utils/chatbotRules";
import "../../styles/chatbot.css";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Halo! Selamat datang di NAILAH JAYA. Ada yang bisa kami bantu?",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

  // Memproses pesan dari pengguna
  const handleSend = (question) => {
    const text = question.trim();

    if (!text) return;

    const userMessage = {
      text: text,
      sender: "user",
    };

    const botMessage = {
      text: getBotReply(text),
      sender: "bot",
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      userMessage,
      botMessage,
    ]);

    setInput("");
  };

  // Mengirim pesan melalui form
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <div className="chat-widget">
      {/* Tombol membuka chatbot */}
      <button
        type="button"
        className="chat-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Tutup chatbot" : "Buka chatbot"}
      >
        {isOpen ? (
          "×"
        ) : (
          <svg
            className="chat-robot-icon"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Antena robot */}
            <path
              d="M32 7 V13"
              stroke="#8CCAFF"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="32" cy="6" r="4" fill="#75C4FF" />

            {/* Spion mobil */}
            <path
              d="M12 25 L5 21 Q2 20 3 25 L6 32 L13 32 Z"
              fill="#C8D8FF"
            />
            <path
              d="M52 25 L59 21 Q62 20 61 25 L58 32 L51 32 Z"
              fill="#C8D8FF"
            />

            {/* Bodi mobil */}
            <path
              d="M8 38 L13 25 Q16 17 24 17 H40 Q48 17 51 25 L56 38 L57 48 Q57 53 52 53 H12 Q7 53 7 48 Z"
              fill="white"
            />

            {/* Kaca depan */}
            <path
              d="M18 29 Q20 22 26 22 H38 Q44 22 46 29 L49 37 H15 Z"
              fill="#172B50"
            />

            {/* Mata robot */}
            <path
              d="M20 31 Q24 26 28 31"
              stroke="#75C4FF"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M36 31 Q40 26 44 31"
              stroke="#75C4FF"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Lampu depan */}
            <rect
              x="10"
              y="40"
              width="11"
              height="6"
              rx="3"
              fill="#75C4FF"
            />
            <rect
              x="43"
              y="40"
              width="11"
              height="6"
              rx="3"
              fill="#75C4FF"
            />

            {/* Senyum robot */}
            <path
              d="M27 45 H37"
              stroke="#293C60"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Roda mobil */}
            <rect x="11" y="49" width="10" height="7" rx="3" fill="#172B50" />
            <rect x="43" y="49" width="10" height="7" rx="3" fill="#172B50" />
          </svg>
        )}
      </button>

      {/* Jendela chatbot */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div>
              <h3>NAILAH JAYA</h3>
              <p>Asisten Informasi Kursus</p>
            </div>

            <button
              type="button"
              className="chat-close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup chatbot"
            >
              ×
            </button>
          </div>

          {/* Isi percakapan */}
          <div className="chat-body">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.text}
                sender={message.sender}
              />
            ))}

            {/* Pertanyaan cepat */}
            {messages.length === 1 && (
              <QuickQuestions onSelect={handleSend} />
            )}
          </div>

          {/* Input pesan */}
          <form className="chat-input-area" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ketik pesan..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button type="submit" aria-label="Kirim pesan">
              ➤
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatWidget;