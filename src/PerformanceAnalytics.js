import React, { useState } from 'react';

function PerformanceAnalytics() {
  const [stats, setStats] = useState({
    trades: 124,
    profit: 5823,
    winRate: '68%'
  });

  const refreshStats = () => {
    // Simulate new data
    setStats({
      trades: Math.floor(Math.random() * 200),
      profit: Math.floor(Math.random() * 10000),
      winRate: `${Math.floor(Math.random() * 100)}%`
    });
  };

  return (
    <div style={{ marginTop: '2em', padding: '1em', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>📊 Performance Analytics</h2>
      <ul>
        <li><strong>Total Trades:</strong> {stats.trades}</li>
        <li><strong>Total Profit:</strong> ${stats.profit}</li>
        <li><strong>Win Rate:</strong> {stats.winRate}</li>
      </ul>
      <button
        onClick={refreshStats}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: '#17a2b8',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        🔄 Refresh Stats
      </button>
    </div>
  );
}

export default PerformanceAnalytics;
