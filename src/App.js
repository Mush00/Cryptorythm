// App.js
import React, { useEffect, useState } from 'react';

// 🌗 Theme
import ThemeToggle from './ThemeToggle';

// 🔐 Wallet Login
import Web3Login from './Web3Login';

// 🤖 Trading Bot UI Placeholder
import TradingBotPanel from './TradingBotPanel';

// 📡 DEX Readiness Checker
import { checkDEXConnection } from './readinessCheck';

// 🧠 Smart Contract Utility
import { getVaultStatus } from './useSmartContract';

// 📰 Marketing Broadcast Bot
import './autoMarketingBot';

// 🚦 Traffic Data
import './trafficAnalyzer';

// 🔬 Strategy Tester
import './strategyBacktestOptimizer';

// 🌍 Internationalization
import { translations } from './i18n';

function App() {
  const [vaultStatus, setVaultStatus] = useState(null);
  const [language, setLanguage] = useState('en');
  const t = translations[language]; // 🌐 Language switch

  useEffect(() => {
    checkDEXConnection(); // ✅ DEX check on load
  }, []);

  const handleVaultCheck = async () => {
    const status = await getVaultStatus();
    setVaultStatus(status);
  };

  return (
    <div style={{ padding: '2em' }}>
      <h1>{t.welcome}</h1>

      <ThemeToggle />
      <Web3Login />

      <button onClick={handleVaultCheck}>🔍 Check Vault Status</button>
      {vaultStatus && <p>🧾 Vault Status: {vaultStatus}</p>}

      <TradingBotPanel />

      <div>
        <label>🌐 Language:</label>
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </div>
  );
}

export default App;
