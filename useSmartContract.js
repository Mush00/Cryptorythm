
import Web3 from 'web3';
import contractABI from './NFTVaultRental.abi.json';

const CONTRACT_ADDRESS = "0x123...abc";

export async function getVaultStatus() {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS);
  return await contract.methods.getVaultStatus().call();
}
