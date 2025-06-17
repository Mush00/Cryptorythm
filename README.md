
# Cryptorythm - Ultimate Full Flat Deployment

🔮 AI NFT + DAO + Smart Contract platform — deployable on Netlify + Node backend

## 💡 Features
- React frontend (Web3-ready)
- NFT Viewer (vaulted / rented NFTs)
- NFT Minting panel
- DAO Voting UI
- Express.js API backend
- Smart contract stub + ABI file
- DAO Proposal template
- Netlify + GitHub ready

## 🧱 Files Included
- `App.js`, `NFTViewer.js`, `NFTMintForm.js`, `DAOVoting.js`
- `NFTVaultRental.sol`, `NFTVaultRental.abi.json`
- `server.js` (backend)
- `.env.example`, `netlify.toml`, `package.json`

## 🚀 Deploy on Netlify
- Push to GitHub
- Build command: `npm run build`
- Publish directory: `build`

## ▶️ Run Backend (Optional)
```bash
npm install
node server.js
```


## 🌍 New Features
- i18n.js → Multi-language support (EN/ES ready)
- ThemeToggle.js → Switch between dark and light mode
- autoPatch.js → Auto maintenance + upgrade module


---

## 🧪 Dev Utilities Added
- `deployBuild.sh`: Run local production build
- `test-api.js`: Call backend API locally
- `useSmartContract.js`: Web3 contract interaction
- `LICENSE.txt`: MIT open source
- `DEPLOY_TIMESTAMP.txt`: Auto-tracking of build timestamp


## 🧠 New Final Additions:
- `AdminDashboard.js` — UI for admin tools
- `deployContractTemplate.js` — Template for deploying smart contracts
- `cryptoPaymentHandler.js` — Web3-based ETH payments


## 🧠 Final Additions:
- `AnalyticsTracker.js` — Page visit tracker
- `OnboardingWizard.js` — Step-by-step user guide
- `ChatBotSupport.js` — Simulated chatbot assistant


## 📢 AI Marketing & Bot Systems (New)
- `autoMarketingBot.js`: Auto-broadcast announcements to social media
- `growthCampaignManager.js`: Plan and simulate NFT campaign drops
- `trafficAnalyzer.js`: Track NFT views + traffic trends


## 🤖 AI Trading Additions
- `binanceConnector.js`: Connect to Binance for price feeds (real/testnet ready)
- `strategyBacktestOptimizer.js`: Backtest strategies on price sets
- `PerformanceDashboard.js`: UI for showing executed trades


## 🛡 Security & Encryption
- AES-256 encryption for API keys (recommended via `.env`)
- `server.js` backend hardened with basic CORS and error handlers
- Sensitive data stored client-side only during session
- Smart contract methods validated before on-chain interaction

## 🔁 DEX Support Added
- `dexSwitcherConfig.js` → Switch between PancakeSwap / Uniswap
- `pancakeSwapBot.js` → Trade on BSC via PancakeSwap
- `readinessCheck.js` → Verifies live RPC connection to selected DEX
