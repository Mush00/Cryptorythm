import React, { useState } from 'react';

function AdminDashboard() {
  const [selectedAction, setSelectedAction] = useState('');

  const handleClick = (action) => {
    setSelectedAction(action);
  };

  return (
    <div style={{ marginTop: '2em', fontFamily: 'Arial' }}>
      <h2>🛡️ Admin Dashboard</h2>
      <ul>
        <li onClick={() => handleClick('Viewing platform stats')}>
          📊 View platform stats
        </li>
        <li onClick={() => handleClick('Moderating NFT listings')}>
          📝 Moderate NFT listings
        </li>
        <li onClick={() => handleClick('Approving smart contract changes')}>
          🔐 Approve smart contract changes
        </li>
      </ul>
      {selectedAction && (
        <p style={{ marginTop: '1rem', color: 'green' }}>
          ✅ {selectedAction} triggered!
        </p>
      )}
    </div>
  );
}

export default AdminDashboard;
