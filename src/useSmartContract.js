// useSmartContract.js
// 🔐 Utility to interact with a deployed smart contract (e.g., NFT vault) using Web3.js

import Web3 from 'web3'; // ⛓️ Web3 library for blockchain interaction
import contractABI from './NFTVaultRental.abi.json'; // 📜 Import the ABI (smart contract interface)

// 🏦 Replace this with your deployed smart contract address
const CONTRACT_ADDRESS = "0x123...abc";

// 📦 Function to fetch vault status from the smart contract
export async function getVaultStatus() {
  const web3 = new Web3(window.ethereum); // 🔗 Connect to injected provider (e.g., MetaMask)
  
  const contract = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS); // 📘 Create contract instance
  
  return await contract.methods.getVaultStatus().call(); // 🧠 Call read-only method from contract
}
