export const dexConfig = {
  defaultDEX: "pancakeswap",
  supportedDEXs: {
    pancakeswap: {
      rpc: "https://bsc-dataseed.binance.org/",
      router: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    },
    uniswap: {
      rpc: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    }
  }
};
