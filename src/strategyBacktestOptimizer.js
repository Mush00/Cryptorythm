const testPrices = [101, 102, 100, 103, 105, 98, 110];

/**
 * Runs a backtest for a given price series and strategy.
 * @param {number[]} prices - Historical prices
 * @param {function} strategy - Strategy function
 * @returns {number} - Total profit from strategy
 */
function runBacktest(prices, strategy) {
  let profit = 0;
  let position = null;

  prices.forEach(price => {
    const action = strategy(price, position);
    if (action === 'BUY') {
      position = price;
    } else if (action === 'SELL' && position !== null) {
      profit += price - position;
      position = null;
    }
  });

  return profit;
}

/**
 * Strategy 1: Simple Mean Reversion
 * Buys if price is under 100, sells if over 102
 */
function simpleMeanReversion(price, lastBuy) {
  if (!lastBuy && price < 100) return 'BUY';
  if (lastBuy && price > 102) return 'SELL';
  return 'HOLD';
}

/**
 * Strategy 2: Momentum Strategy
 * Buys if price is increasing, sells if decreasing
 */
function momentumStrategy(price, lastBuy, index, prices) {
  const prevPrice = index > 0 ? prices[index - 1] : price;
  if (!lastBuy && price > prevPrice) return 'BUY';
  if (lastBuy && price < prevPrice) return 'SELL';
  return 'HOLD';
}

/**
 * Wrapper for momentum strategy with index access
 */
function momentumStrategyWrapper(price, lastBuy, i, prices) {
  return momentumStrategy(price, lastBuy, i, prices);
}

// Compare strategies
function compareStrategies(prices) {
  const strategies = {
    'Simple Mean Reversion': simpleMeanReversion,
    'Momentum Strategy': (price, lastBuy) => {
      const i = prices.indexOf(price);
      return momentumStrategyWrapper(price, lastBuy, i, prices);
    },
  };

  const results = {};

  for (const [name, strategyFn] of Object.entries(strategies)) {
    const profit = runBacktest(prices, strategyFn);
    results[name] = profit;
    console.log(`📈 Strategy: ${name} | Profit: ${profit}`);
  }

  return results;
}

// Execute comparison
compareStrategies(testPrices);
