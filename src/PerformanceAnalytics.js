import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PerformanceAnalytics() {
  const [stats, setStats] = useState({
    trades: 0,
    profit: 0,
    winRate: '0%'
  });

  const fetchStats = async () => {
    try {
      const response = await axios.get('https://your-backend.com/api/performance');
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching performance stats:', error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div style={{ marginTop: '2em', padding: '1em' }}>
      <h2>📊 Performance Analytics</h2>
      <ul>
        <li><strong>Total Trades:</strong> {stats.trades}</li>
        <li><strong>Total Profit:</strong> ${stats.profit}</li>
        <li><strong>Win Rate:</strong> {stats.winRate}</li>
      </ul>
      <button
        onClick={fetchStats}
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
