export async function payWithETH(toAddress, amountEth) {
  if (!window.ethereum) {
    alert("🦊 MetaMask not found. Please install it.");
    return;
  }

  try {
    const provider = window.ethereum;
    const accounts = await provider.request({ method: 'eth_requestAccounts' });
    const from = accounts[0];
    const valueInWei = (parseFloat(amountEth) * 1e18).toString(16); // Convert ETH to hex Wei

    const gas = await provider.request({
      method: 'eth_estimateGas',
      params: [{
        from,
        to: toAddress,
        value: valueInWei,
      }],
    });

    const txHash = await provider.request({
      method: 'eth_sendTransaction',
      params: [{
        from,
        to: toAddress,
        value: valueInWei,
        gas,
      }],
    });

    alert(`✅ Transaction sent!\nHash: ${txHash}`);
    return txHash;
  } catch (err) {
    console.error("❌ Payment failed:", err);
    alert("❌ Transaction failed. See console.");
    return null;
  }
}
