import React from 'react';
import ConnectWallet from './ConnectWallet';
import TradingBotPanel from './TradingBotPanel';
import NFTDashboard from './NFTDashboard';
import DAOVoting from './DAOVoting';
import AdminPanel from './AdminPanel';
import PerformanceAnalytics from './PerformanceAnalytics';
import Notifications from './Notifications';
import AutoMarketingAI from './AutoMarketingAI';
import AdvancedStrategyManager from './AdvancedStrategyManager';
import LegalNotice from './LegalNotice';
import ThemeSwitch from './ThemeSwitch';
import Web3Login from './Web3Login';
import HomePage from './HomePage';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🔮 Cryptorythm</h1>
      <ThemeSwitch />
      <HomePage />
      <Web3Login />
      <ConnectWallet />
      <TradingBotPanel />
      <NFTDashboard />
      <DAOVoting />
      <AdminPanel />
      <PerformanceAnalytics />
      <Notifications />
      <AutoMarketingAI />
      <AdvancedStrategyManager />
      <LegalNotice />
    </div>
  );
}

export default App;
