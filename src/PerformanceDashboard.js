import React, { useState } from 'react';

const initialLogs = [
  { id: 1, type: 'BUY', token: 'DOGE', price: 0.22 },
  { id: 2, type: 'SELL', token: 'DOGE', price: 0.28 },
  { id: 3, type: 'BUY', token: 'ETH', price: 1800 },
];

function PerformanceDashboard() {
  const [logs, setLogs] = useState(initialLogs);
  const [sortKey, setSortKey] = useState(null);

  const sortBy = (key) => {
    const sorted = [...logs].sort((a, b) => {
      if (typeof a[key] === 'string') {
        return a[key].localeCompare(b[key]);
      }
      return a[key] - b[key];
    });
    setSortKey(key);
    setLogs(sorted);
  };

  return (
    <div style={{ marginTop: '2em' }}>
      <h2>📈 Bot Trade Logs</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Type</th>
            <th style={{ cursor: 'pointer' }} onClick={() => sortBy('token')}>Token {sortKey === 'token' && '🔽'}</th>
            <th style={{ cursor: 'pointer' }} onClick={() => sortBy('price')}>Price {sortKey === 'price' && '🔽'}</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id}>
              <td>{log.type}</td>
              <td>{log.token}</td>
              <td>${log.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PerformanceDashboard;
