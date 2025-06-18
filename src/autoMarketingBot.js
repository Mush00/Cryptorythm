import React from 'react';
import axios from 'axios';

function AutoMarketingBot() {
  const broadcastUpdate = async (message) => {
    console.log("📢 Broadcasting:", message);
    
    // Simulate sending the message
    try {
      // Example call (won't actually work without a backend API)
      // await axios.post('https://api.example.com/broadcast', { message });

      alert(`📢 Update broadcasted: ${message}`);
    } catch (error) {
      console.error("Broadcast failed:", error);
      alert("❌ Broadcast failed. Check console.");
    }
  };

  return (
    <div style={{ marginTop: '2em' }}>
      <h2>📡 Auto Marketing Bot</h2>
      <button
        onClick={() => broadcastUpdate("🚀 New NFT drop on Cryptorythm!")}
        style={{
          padding: '10px 20px',
          backgroundColor: '#8e44ad',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Send Broadcast
      </button>
    </div>
  );
}

export default AutoMarketingBot;
