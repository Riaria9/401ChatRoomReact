import React, { useState } from "react";
import "./ChatApp.css"; // Import a CSS file for styling

function ChatApp() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage(""); // Clear the input field after sending
    }
  };

  return (
    <div className="chat-app-container">
      {/* Control Bar */}
      <div className="control-bar">
        {/* Add your control bar elements here */}
      </div>

      {/* Players Section */}
      <div className="players-section">
        {/* Display player identities */}
        <div className="players-list">
          <div className="player">Player 1</div>
          <div className="player">Player 2</div>
          <div className="player">Player 3</div>
          <div className="player">Player 4</div>
          <div className="player">Player 5</div>
          <div className="player">Player 6</div>
        </div>
        {/* Your identity */}
        <div className="your-identity">
          You are:
          <div className="identity">Villager</div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="chat-section">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              {msg}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={message}
            onChange={handleInputChange}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
