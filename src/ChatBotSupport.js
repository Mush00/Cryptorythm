import React, { useState } from 'react';

function ChatBotSupport() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;

    const reply = "🤖 I'm still learning! But I'm here to help.";
    setMessages([...messages, `🧑‍💻 ${input}`, reply]);
    setInput("");
  };

  return (
    <div style={{ marginTop: '2em', padding: '1em', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>💬 Help Chat</h2>

      <div style={{ minHeight: '100px', padding: '0.5em', background: '#f9f9f9', border: '1px solid #ccc', borderRadius: '4px' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: '0.5em' }}>{msg}</div>
        ))}
      </div>

      <input
        style={{ marginTop: '1em', padding: '0.5em', width: '80%' }}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your question..."
      />

      <button onClick={send} style={{ padding: '0.5em 1em', marginLeft: '0.5em' }}>
        Send
      </button>
    </div>
  );
}

export default ChatBotSupport;
