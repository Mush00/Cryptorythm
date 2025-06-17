
const Web3 = require('web3');
const fs = require('fs');
const compiled = require('./NFTVaultRental.abi.json');

const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_PROJECT_ID');
const web3 = new Web3(provider);

async function deployContract() {
  const accounts = await web3.eth.getAccounts();
  const contract = new web3.eth.Contract(compiled);
  const result = await contract.deploy({
    data: 'YOUR_COMPILED_BYTECODE'
  }).send({ from: accounts[0], gas: '3000000' });

  console.log("✅ Contract deployed to:", result.options.address);
}

deployContract();
