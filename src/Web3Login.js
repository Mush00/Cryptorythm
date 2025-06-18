import React, { useState } from 'react';

function Web3Login() {
  const [connected, setConnected] = useState(false);

  const handleLogin = () => {
    // In the future, Web3 integration will go here
    alert("🔐 Simulating Web3 wallet connection...");
    setConnected(true);
  };

  return (
    <div style={{ marginTop: '2em' }}>
      <h2>🔐 Web3 Login</h2>
      {!connected ? (
        <button
          onClick={handleLogin}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2980b9',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Connect Wallet
        </button>
      ) : (
        <p style={{ color: 'green' }}>✅ Wallet connected!</p>
      )}
    </div>
  );
}

export default Web3Login;
