import React, { useState } from 'react';
import Web3 from 'web3';

function Web3Login() {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState('');

  const handleLogin = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setConnected(true);
      } catch (error) {
        console.error('User denied wallet connection', error);
        alert('❌ Wallet connection failed.');
      }
    } else {
      alert('🦊 MetaMask not detected. Please install it.');
    }
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
        <p style={{ color: 'green' }}>✅ Wallet Connected: {account}</p>
      )}
    </div>
  );
}

export default Web3Login;
