
import { quickQuestions } from "../../utils/chatbotRules";

function QuickQuestions({ onSelect }) {
  return (
    <div className="chat-quick-questions">
      {quickQuestions.map((question) => (
        <button
          key={question}
          type="button"
          className="chat-quick-question"
          onClick={() => onSelect(question)}
        >
          {question}
        </button>
      ))}
    </div>
  );
}

export default QuickQuestions;
