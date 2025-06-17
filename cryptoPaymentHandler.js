
export async function payWithCrypto(toAddress, amountEth) {
  if (!window.ethereum) return alert("Web3 wallet not found!");
  const provider = new window.ethereum;
  const accounts = await provider.request({ method: 'eth_requestAccounts' });
  const from = accounts[0];
  await provider.request({
    method: 'eth_sendTransaction',
    params: [{
      from,
      to: toAddress,
      value: (parseFloat(amountEth) * 1e18).toString(16),
    }]
  });
}
