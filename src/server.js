
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const nfts = [
  { id: 1, name: "StellarBloom Nexus", price: "1000 BTC" },
  { id: 2, name: "Chronosplicer", price: "800 BTC" }
];

app.get('/api/nfts', (req, res) => {
  res.json(nfts);
});

app.listen(5000, () => console.log('Backend running on port 5000'));
