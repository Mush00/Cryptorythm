import React, { useState } from 'react';

function NFTDashboard() {
  const [viewMode, setViewMode] = useState('grid');

  const mockNFTs = [
    { id: 1, name: 'CryptoCat #1', image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'CryptoCat #2', image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'CryptoCat #3', image: 'https://via.placeholder.com/100' }
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>🖼️ NFT Dashboard</h2>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setViewMode('grid')}>Grid View</button>
        <button onClick={() => setViewMode('list')} style={{ marginLeft: '1rem' }}>List View</button>
      </div>

      <div style={{ display: viewMode === 'grid' ? 'flex' : 'block', gap: '1rem' }}>
        {mockNFTs.map(nft => (
          <div key={nft.id} style={{
            border: '1px solid #ccc',
            padding: '1rem',
            marginBottom: '1rem',
            width: viewMode === 'grid' ? '150px' : '100%'
          }}>
            <img src={nft.image} alt={nft.name} style={{ width: '100%' }} />
            <p>{nft.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NFTDashboard;
