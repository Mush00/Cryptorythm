import React from 'react';
import AdminDashboard from './AdminDashboard';
import AdminPanel from './AdminPanel';
import AdvancedStrategyManager from './AdvancedStrategyManager';
import AnalyticsTracker from './AnalyticsTracker';
import AutoMarketingAi from './AutoMarketingAi';
import ChatBotSupport from './ChatBotSupport';
import ConnectWallet from './ConnectWallet';
import DAOvoting from './DAOvoting';
import DEXStatusDashboard from './DEXStatusDashboard';
import ETHPaymentForm from './ETHPaymentForm';
import HomePage from './HomePage';
import LegalNotice from './LegalNotice';
import NFTDashboard from './NFTDashboard';
import NFTMintForm from './NFTMintForm';
import NFTViewer from './NFTViewer';
import Notifications from './Notifications';
import OnboardingWizard from './OnboardingWizard';
import PerformanceAnalytics from './PerformanceAnalytics';
import PerformanceDashboard from './PerformanceDashboard';
import ThemeToggle from './ThemeToggle';
import TradingBotPanel from './TradingBotPanel';
import Web3Login from './Web3Login';
import autoMarketingBot from './autoMarketingBot';
import autoPatch from './autoPatch';
import binanceConnector from './binanceConnector';
import dexSwitcher from './dexSwitcher';
import deployContractTemplate from './deployContractTemplate';
import pancakeSwapBot from './pancakeSwapBot';
import strategyBacktestOptimizer from './strategyBacktestOptimizer';
import trafficAnalyzer from './trafficAnalyzer';
import uniswapBot from './uniswapBot';
import useSmartContract from './useSmartContract';

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
