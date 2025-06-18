
import React, { useState } from 'react';

function NFTMintForm() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const mint = () => {
    alert(\`Minting NFT: \${name} with image URL: \${url}\`);
    // Blockchain mint logic goes here
  };

  return (
    <div style={{ marginTop: '2em' }}>
      <h2>🎨 Mint a New NFT</h2>
      <input placeholder="NFT Name" value={name} onChange={e => setName(e.target.value)} /><br/><br/>
      <input placeholder="Image URL" value={url} onChange={e => setUrl(e.target.value)} /><br/><br/>
      <button onClick={mint}>Mint NFT</button>
    </div>
  );
}

export default NFTMintForm;
