
import React from 'react';

const NFTs = [
  { name: "StellarBloom Nexus", price: "1000 BTC", status: "Vaulted" },
  { name: "Chronosplicer", price: "800 BTC", status: "Available" },
  { name: "Singularity Helix", price: "950 BTC", status: "Rented" },
];

function NFTViewer() {
  return (
    <div style={{ marginTop: '2em' }}>
      <h2>NFT Vault</h2>
      <ul>
        {NFTs.map((nft, idx) => (
          <li key={idx}>
            <strong>{nft.name}</strong> - {nft.price} [{nft.status}]
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NFTViewer;
