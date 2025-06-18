const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const nfts = [
  { id: 1, name: "StellarBloom Nexus", price: 3.2 },
  { id: 2, name: "Chronosplicer", price: 1.9 }
];

// Serve NFT list
app.get('/api/nfts', (req, res) => {
  res.json(nfts);
});

// NEW: Serve DEX readiness
app.get('/api/dex-status', async (req, res) => {
  const dexEndpoints = {
    pancakeswap: 'https://bsc-dataseed.binance.org/',
    uniswap: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'
  };

  const status = await Promise.all(
    Object.entries(dexEndpoints).map(async ([name, url]) => {
      try {
        const ping = await fetch(url, { method: 'HEAD' });
        return { name, url, online: ping.ok };
      } catch {
        return { name, url, online: false };
      }
    })
  );

  res.json(status);
});

// Listen on port 5000
app.listen(5000, () => console.log('🟢 Backend running on http://localhost:5000'));
