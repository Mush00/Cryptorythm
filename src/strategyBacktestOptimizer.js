
const testPrices = [101, 102, 100, 103, 105, 99, 98];

function runBacktest(prices, strategy) {
  let profit = 0;
  let position = null;

  prices.forEach(price => {
    if (strategy(price, position) === 'BUY') {
      position = price;
    } else if (strategy(price, position) === 'SELL' && position !== null) {
      profit += price - position;
      position = null;
    }
  });

  console.log("📊 Backtest Profit:", profit);
}

function simpleMeanReversion(price, lastBuy) {
  if (!lastBuy && price < 100) return 'BUY';
  if (lastBuy && price > 102) return 'SELL';
  return 'HOLD';
}

runBacktest(testPrices, simpleMeanReversion);
