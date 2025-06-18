import React from 'react';

// Import your components
import ConnectWallet from './ConnectWallet';
import AdminPanel from './AdminPanel';
import HomePage from './HomePage';
import NFTDashboard from './NFTDashboard';
// Add more as needed...

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🔮 Cryptorythm</h1>
      <p>Welcome to the full Cryptorythm frontend.</p>
      <hr />

      <ConnectWallet />
      <AdminPanel />
      <HomePage />
      <NFTDashboard />
      {/* Add more components below as needed */}

    </div>
  );
}

export default App;
