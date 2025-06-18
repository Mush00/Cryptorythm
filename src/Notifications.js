import React, { useState } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState([
    { message: '🔔 Market volatility is high today', type: 'warning' },
    { message: '✅ Your NFT was minted successfully', type: 'success' },
    { message: '⚙️ Scheduled maintenance at 2:00 AM UTC', type: 'info' },
  ]);

  const clearNotifications = () => setNotifications([]);

  return (
    <div style={{ marginTop: '2em' }}>
      <h2>📢 Notifications</h2>

      {notifications.length === 0 ? (
        <p>No new notifications</p>
      ) : (
        <ul style={{ paddingLeft: '1em' }}>
          {notifications.map((note, idx) => (
            <li key={idx} style={{ marginBottom: '0.5em' }}>
              {note.message}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={clearNotifications}
        style={{
          marginTop: '1em',
          padding: '8px 16px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Clear Notifications
      </button>
    </div>
  );
}

export default Notifications;
