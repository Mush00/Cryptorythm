import React, { useState } from 'react';
import { payWithETH } from './cryptoPaymentHandler';

function ETHPaymentForm() {
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState(null);

  const handleSend = async () => {
    if (!to || !amount) return alert("Enter address and amount");
    setLoading(true);
    const tx = await payWithETH(to, amount);
    setTxHash(tx);
    setLoading(false);
  };

  return (
    <div>
      <h2>💸 Send ETH</h2>
      <input value={to} onChange={e => setTo(e.target.value)} placeholder="Recipient Address" />
      <input value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount in ETH" />
      <button onClick={handleSend} disabled={loading}>
        {loading ? 'Sending...' : 'Send ETH'}
      </button>
      {txHash && <p>✅ Tx Hash: <a href={`https://etherscan.io/tx/${txHash}`} target="_blank" rel="noreferrer">{txHash}</a></p>}
    </div>
  );
}

export default ETHPaymentForm;
