
import React, { useState } from 'react';

function ChatBotSupport() {
  const [messages, setMessages] = useState(["👋 Hello! I'm your Cryptorythm assistant."]);
  const [input, setInput] = useState("");

  const send = () => {
    const reply = "🤖 I'm still learning! Check the FAQ or contact support.";
    setMessages([...messages, "🧑 " + input, reply]);
    setInput("");
  };

  return (
    <div style={{ marginTop: '2em' }}>
      <h2>💬 Help Chat</h2>
      <div style={{ border: "1px solid #ccc", padding: 10, maxHeight: 150, overflowY: "auto" }}>
        {messages.map((msg, idx) => <div key={idx}>{msg}</div>)}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your question..." />
      <button onClick={send}>Send</button>
    </div>
  );
}

export default ChatBotSupport;
