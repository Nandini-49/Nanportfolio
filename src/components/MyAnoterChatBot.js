import React, { useState } from "react";
import axios from "axios";

const chatbotStyles = {
  chatbot: {
    width: "300px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    margin: "0 auto",
    padding: "10px",
  },
  chatbox: {
    display: "flex",
    flexDirection: "column",
  },
  messages: {
    maxHeight: "300px",
    overflowY: "scroll",
  },
  message: {
    marginBottom: "10px",
  },
  botMessage: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    marginLeft: "auto",
  },
  userMessage: {
    backgroundColor: "#e0e0e0",
    padding: "5px 10px",
    borderRadius: "5px",
    marginRight: "auto",
  },
  input: {
    width: "100%",
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

function MyAnotherChatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    // Add the user message to the messages array
    setMessages([...messages, { role: "user", text: input }]);

    try {
      // Send the user message to the ChatGPT API
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        {
          prompt: `User: ${input}\nChatGPT:`,
          max_tokens: 150,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_API_KEY",
          },
        }
      );

      // Extract the bot response from the API response
      const botResponse = response.data.choices[0].text;

      // Add the bot response to the messages array
      setMessages([...messages, { role: "bot", text: botResponse }]);

      // Clear the input field
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chatbot" style={chatbotStyles.chatbot}>
      <div className="chatbox" style={chatbotStyles.charbox}>
        <div className="messages" style={chatbotStyles.messages}>
          {messages.map((message, index) => (
            <div key={index} className="message" style={chatbotStyles.message}>
              {message.role === "bot" ? (
                <div className="bot-message" style={chatbotStyles.botMessage}>
                  {message.text}
                </div>
              ) : (
                <div className="user-message" style={chatbotStyles.userMessage}>
                  {message.text}
                </div>
              )}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
          style={chatbotStyles.input}
        />
        <button onClick={handleSendMessage} style={chatbotStyles.button}>
          Send
        </button>
      </div>
    </div>
  );
}

export default MyAnotherChatbot;
