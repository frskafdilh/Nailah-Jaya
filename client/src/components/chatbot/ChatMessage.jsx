
function ChatMessage({ message, sender }) {
  const isBot = sender === "bot";

  return (
    <div
      className={`chat-message ${
        isBot ? "chat-message-bot" : "chat-message-user"
      }`}
    >
      <div className="chat-message-bubble">
        {message}
      </div>
    </div>
  );
}

export default ChatMessage;
