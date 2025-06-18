import React, { useState } from 'react';

const NFTs = [
  { name: "StellarBloom Nexus", price: "1.2 ETH" },
  { name: "Chronosplicer", price: "800 BTC" },
  { name: "Singularity Helix", price: "950 MATIC" },
];

function NFTViewer() {
  const [filter, setFilter] = useState('');

  const filteredNFTs = NFTs.filter(nft =>
    nft.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ marginTop: '2em' }}>
      <h2>🧾 NFT Vault</h2>

      <input
        placeholder="Search NFT by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          marginBottom: '1rem',
          padding: '8px',
          width: '300px',
          fontSize: '14px'
        }}
      />

      <ul>
        {filteredNFTs.map((nft, idx) => (
          <li key={idx} style={{ paddingBottom: '0.5rem' }}>
            <strong>{nft.name}</strong> — <span>{nft.price}</span>
          </li>
        ))}
        {filteredNFTs.length === 0 && (
          <li>No NFTs match your search.</li>
        )}
      </ul>
    </div>
  );
}

export default NFTViewer;
