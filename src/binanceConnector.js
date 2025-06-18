import React, { useState } from 'react';
import axios from 'axios';

const BINANCE_API_URL = 'https://api.binance.com/api/v3/ticker/price';

function LivePriceChecker() {
  const [symbol, setSymbol] = useState('BTCUSDT');
  const [price, setPrice] = useState(null);

  const getPrice = async () => {
    try {
      const { data } = await axios.get(`${BINANCE_API_URL}?symbol=${symbol}`);
      setPrice(data.price);
    } catch (err) {
      console.error("Error fetching price:", err);
      setPrice("Error fetching price");
    }
  };

  return (
    <div style={{ marginTop: '2em' }}>
      <h2>📊 Live Crypto Price</h2>
      <input
        value={symbol}
        onChange={e => setSymbol(e.target.value.toUpperCase())}
        placeholder="Enter Symbol (e.g., BTCUSDT)"
        style={{ marginRight: '10px' }}
      />
      <button onClick={getPrice}>Fetch Price</button>
      {price && <p>💰 Price for {symbol}: ${price}</p>}
    </div>
  );
}

export default LivePriceChecker;
