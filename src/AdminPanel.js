import React, { useState } from 'react';

function AdminPanel() {
  const [settings, setSettings] = useState({
    tradingEnabled: true,
    maintenanceMode: false,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div style={{ marginTop: '2em', fontFamily: 'Arial' }}>
      <h2>🧩 Admin Panel Settings</h2>
      <p>Toggle platform-wide settings:</p>
      <ul>
        <li onClick={() => toggleSetting('tradingEnabled')}>
          📈 Trading Enabled: <strong>{settings.tradingEnabled ? 'Yes' : 'No'}</strong>
        </li>
        <li onClick={() => toggleSetting('maintenanceMode')}>
          🛠️ Maintenance Mode: <strong>{settings.maintenanceMode ? 'On' : 'Off'}</strong>
        </li>
      </ul>
    </div>
  );
}

export default AdminPanel;
