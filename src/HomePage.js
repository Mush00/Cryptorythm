import React, { useState } from 'react';

/**
 * 🏡 HomePage Component – Welcome screen
 */
function HomePage() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>👾 Welcome to Cryptorythm</h1>
      <p>The most advanced AI-powered trading and NFT platform.</p>
      <p>Connect your wallet to get started.</p>

      <button 
        onClick={() => setShowInfo(!showInfo)} 
        style={{ marginTop: '1rem', padding: '10px', fontSize: '16px' }}
      >
        {showInfo ? 'Hide Info' : 'Learn More'}
      </button>

      {showInfo && (
        <div style={{ marginTop: '1rem' }}>
          <p>🚀 Built for crypto traders, NFT lovers, and AI enthusiasts.</p>
          <p>🔐 Fully decentralized. Completely customizable.</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
