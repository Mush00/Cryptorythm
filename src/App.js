import React from 'react';

// ✅ Import your components
import ConnectWallet from './ConnectWallet';
import AdminPanel from './AdminPanel';
import NFTDashboard from './NFTDashboard';
import HomePage from './HomePage'; // Example extra panel

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🔮 Cryptorythm</h1>
      <p>Welcome to the full Cryptorythm frontend.</p>
      <hr />

      {/* ✅ Show your components below */}
      <ConnectWallet />
      <AdminPanel />
      <HomePage />
      <NFTDashboard />
    </div>
  );
}

export default App;
