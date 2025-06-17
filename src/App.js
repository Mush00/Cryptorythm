
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

function App() {
  const [account, setAccount] = useState("");

  useEffect(() => {
    async function connectWallet() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      }
    }
    connectWallet();
  }, []);

  return (
    <div style={{ padding: '2em', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>🔮 Cryptorythm</h1>
      <p>Connected Wallet: {account || 'Not connected'}</p>
    </div>
  );
}

export default App;
