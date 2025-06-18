
const axios = require('axios');

const BINANCE_API_URL = 'https://api.binance.com';

async function getPrice(symbol = 'BTCUSDT') {
  const { data } = await axios.get(\`\${BINANCE_API_URL}/api/v3/ticker/price?symbol=\${symbol}\`);
  console.log("📈 Live Price:", data);
}

getPrice(); // Call for demo
