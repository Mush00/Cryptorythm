import './styles.css';
import React from 'react';
import AdminDashboard from './AdminDashboard.js';
import AdminPanel from './AdminPanel.js';
import AdvancedStrategyManager from './AdvancedStrategyManager.js';
import AnalyticsTracker from './AnalyticsTracker.js';
import AutoMarketingAi from './AutoMarketingAi.js';
import ChatBotSupport from './ChatBotSupport.js';
import ConnectWallet from './ConnectWallet.js';
import DAOVoting from './DAOVoting.js';
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
import pancakeSwapBot from './pancakeSwapBot.js';
import strategyBacktestOptimizer from './strategyBacktestOptimizer.js';
import trafficAnalyzer from './trafficAnalyzer.js';
import uniswapBot from './uniswapBot.js';
import useSmartContract from './useSmartContract.js';

function App() {
  return (
    <div className="main-container">
      <div className="admin-dashboard"><AdminDashboard /></div>
      <div className="admin-settings"><AdminPanel /></div>
      <div className="strategy-section"><AdvancedStrategyManager /></div>
      <div className="analytics-box"><AnalyticsTracker /></div>
      <div className="auto-marketing"><AutoMarketingAi /></div>
      <div className="chat-support"><ChatBotSupport /></div>
      <div className="wallet-section"><ConnectWallet /></div>
      <div className="dao-voting"><DAOVoting /></div>
      <div className="dex-status"><DEXStatusDashboard /></div>
      <div className="eth-payment"><ETHPaymentForm /></div>
      <div className="home-section"><HomePage /></div>
      <div className="legal-info"><LegalNotice /></div>
      <div className="nft-dashboard"><NFTDashboard /></div>
      <div className="nft-mint"><NFTMintForm /></div>
      <div className="nft-viewer"><NFTViewer /></div>
      <div className="notifications"><Notifications /></div>
      <div className="onboarding"><OnboardingWizard /></div>
      <div className="performance-section">
        <PerformanceAnalytics />
        <PerformanceDashboard />
      </div>
      <div className="theme-toggle"><ThemeToggle /></div>
      <div className="bot-controls"><TradingBotPanel /></div>
      <div className="web3-login"><Web3Login /></div>
      <div className="bots">
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
    </div>
  );
}

export default App;
