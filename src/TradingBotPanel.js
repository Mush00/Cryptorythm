import React, { useState } from 'react';

function TradingBotPanel() {
  const [botActive, setBotActive] = useState(false);
  const [logs, setLogs] = useState([]);

  const toggleBot = () => {
    const status = !botActive;
    setBotActive(status);
    const message = status ? '🤖 Bot started trading...' : '⛔ Bot stopped.';
    setLogs(prev => [...prev, message]);
  };

  return (
    <div style={{ marginTop: '2em', padding: '1em', border: '1px solid #ccc', borderRadius: '6px' }}>
      <h2>🧠 Trading Bot Panel</h2>

      <button
        onClick={toggleBot}
        style={{
          padding: '10px 20px',
          backgroundColor: botActive ? '#e74c3c' : '#2ecc71',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '1em'
        }}
      >
        {botActive ? 'Stop Bot' : 'Start Bot'}
      </button>

      <div>
        <h4>📜 Bot Logs:</h4>
        <ul>
          {logs.map((log, idx) => (
            <li key={idx}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TradingBotPanel;
