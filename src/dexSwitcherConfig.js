/**
 * 🔁 DEX Configuration Switcher
 * Centralized config file to dynamically switch between supported DEXes
 * 🔄 Expandable: Add SushiSwap, QuickSwap, etc. here later
 */

export const dexConfig = {
  defaultDEX: "pancakeswap", // ✳️ Used as fallback/default
  supportedDEXs: {
    pancakeswap: {
      rpc: "https://bsc-dataseed.binance.org/", // 🟡 BSC Node
      router: "0x10ED43C718714eb63d5aA57B78B54704E256024E" // 🥞 PancakeSwap Router
    },
    uniswap: {
      rpc: "https://mainnet.infura.io/v3/YOUR_INFURA_KEY", // 🔵 Ethereum Node
      router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D" // 🦄 Uniswap V2 Router
    }
  }
};
