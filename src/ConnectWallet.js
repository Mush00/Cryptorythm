import React from 'react';

function ConnectWallet() {
  const handleConnect = () => {
    alert('🦊 Connecting to wallet...');
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={handleConnect} style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Connect Wallet
      </button>
    </div>
  );
}

export default ConnectWallet;
