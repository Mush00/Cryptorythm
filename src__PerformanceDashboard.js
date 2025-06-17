
import React from 'react';

const dummyLogs = [
  { id: 1, type: 'BUY', token: 'DOGE', price: 0.08 },
  { id: 2, type: 'SELL', token: 'DOGE', price: 0.11 },
  { id: 3, type: 'BUY', token: 'ETH', price: 1900 },
];

function PerformanceDashboard() {
  return (
    <div style={{ marginTop: '2em' }}>
      <h2>📈 Bot Trade Logs</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr><th>Type</th><th>Token</th><th>Price</th></tr>
        </thead>
        <tbody>
          {dummyLogs.map(log => (
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
