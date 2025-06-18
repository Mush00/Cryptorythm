import React, { useState } from 'react';

function NFTMintForm() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [minted, setMinted] = useState(false);

  const mint = () => {
    if (!name || !url) {
      alert('Please provide both NFT name and image URL.');
      return;
    }
    alert(`🧬 Minting NFT:\nName: ${name}\nImage: ${url}`);
    setMinted(true);
  };

  return (
    <div style={{ marginTop: '2em' }}>
      <h2>🎨 Mint a New NFT</h2>
      <input
        placeholder="NFT Name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ display: 'block', marginBottom: '1rem', padding: '8px', width: '300px' }}
      />
      <input
        placeholder="Image URL"
        value={url}
        onChange={e => setUrl(e.target.value)}
        style={{ display: 'block', marginBottom: '1rem', padding: '8px', width: '300px' }}
      />
      <button
        onClick={mint}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Mint NFT
      </button>

      {minted && (
        <div style={{ marginTop: '2rem', border: '1px solid #ccc', padding: '1rem', width: '320px' }}>
          <h4>✅ Minted Preview</h4>
          <p><strong>{name}</strong></p>
          <img src={url} alt={name} style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default NFTMintForm;
