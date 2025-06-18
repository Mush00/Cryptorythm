import React, { useEffect, useState } from 'react';

const DEXStatusDashboard = () => {
  const [statuses, setStatuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStatus() {
      setLoading(true);

      const dexConfig = {
        pancakeswap: 'https://bsc-dataseed.binance.org/',
        uniswap: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID',
      };

      const results = await Promise.all(
        Object.entries(dexConfig).map(async ([name, url]) => {
          try {
            const res = await fetch(url, { method: 'HEAD' }); // fast ping
            return { name, url, online: res.ok };
          } catch (err) {
            return { name, url, online: false };
          }
        })
      );

      setStatuses(results);
      setLoading(false);
    }

    fetchStatus();
  }, []);

  return (
    <div style={{ padding: '2em', fontFamily: 'monospace' }}>
      <h2>📡 DEX Readiness Dashboard</h2>
      {loading ? (
        <p>🔄 Checking network status...</p>
      ) : (
        <ul>
          {statuses.map(({ name, online, url }) => (
            <li key={name}>
              {online ? '✅' : '❌'} <strong>{name.toUpperCase()}</strong> —{' '}
              <code>{url}</code>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DEXStatusDashboard;
