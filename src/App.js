import React from 'react';
import AdminDashboard from './AdminDashboard.js';
import AdminPanel from './AdminPanel.js';
import AdvancedStrategyManager from './AdvancedStrategyManager.js';
import AnalyticsTracker from './AnalyticsTracker.js';
import AutoMarketingAi from './AutoMarketingAi.js';
import ChatBotSupport from './ChatBotSupport.js';
import ConnectWallet from './ConnectWallet.js';
import DAOvoting from './DAOvoting.js';
import DEXStatusDashboard from './DEXStatusDashboard.js';
import ETHPaymentForm from './ETHPaymentForm.js';
import HomePage from './HomePage.js';
import LegalNotice from './LegalNotice.js';
import NFTDashboard from './NFTDashboard.js';
import NFTMintForm from './NFTMintForm.js';
import NFTViewer from './NFTViewer.js';
import Notifications from './Notifications.js';
import OnboardingWizard from './OnboardingWizard.js';
import PerformanceAnalytics from './PerformanceAnalytics.js';
import PerformanceDashboard from './PerformanceDashboard.js';
import ThemeToggle from './ThemeToggle.js';
import TradingBotPanel from './TradingBotPanel.js';
import Web3Login from './Web3Login.js';
import autoMarketingBot from './autoMarketingBot.js';
import autoPatch from './autoPatch.js';
import binanceConnector from './binanceConnector.js';
import dexSwitcher from './dexSwitcher.js';
import deployContractTemplate from './deployContractTemplate.js';
import pancakeSwapBot from './pancakeSwapBot.js';
import strategyBacktestOptimizer from './strategyBacktestOptimizer.js';
import trafficAnalyzer from './trafficAnalyzer.js';
import uniswapBot from './uniswapBot.js';
import useSmartContract from './useSmartContract.js';

function App() {
  return (
    <div style={{ padding: '2em' }}>
      <AdminDashboard />
      <AdminPanel />
      <AdvancedStrategyManager />
      <AnalyticsTracker />
      <AutoMarketingAi />
      <ChatBotSupport />
      <ConnectWallet />
      <DAOvoting />
      <DEXStatusDashboard />
      <ETHPaymentForm />
      <HomePage />
      <LegalNotice />
      <NFTDashboard />
      <NFTMintForm />
      <NFTViewer />
      <Notifications />
      <OnboardingWizard />
      <PerformanceAnalytics />
      <PerformanceDashboard />
      <ThemeToggle />
      <TradingBotPanel />
      <Web3Login />
      <autoMarketingBot />
      <autoPatch />
      <binanceConnector />
      <dexSwitcher />
      <deployContractTemplate />
      <pancakeSwapBot />
      <strategyBacktestOptimizer />
      <trafficAnalyzer />
      <uniswapBot />
      <useSmartContract />
    </div>
  );
}

export default App;
