
/**
 * 🔐 Web3Login Component - Connect with Web3Auth or MetaMask login
 */
import React from 'react';

function Web3Login() {
  const handleLogin = () => {
    alert("This will later integrate Web3Auth or similar login.");
  };

  return (
    <div>
      <button onClick={handleLogin}>🔐 Login with Web3</button>
    </div>
  );
}

export default Web3Login;
