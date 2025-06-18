import React, { useState } from 'react';

function AutoMarketingAI() {
  const [status, setStatus] = useState("Idle");

  const startCampaign = () => {
    setStatus("🚀 Launching campaign...");
    setTimeout(() => {
      setStatus("✅ Campaign launched successfully!");
    }, 2000);
  };

  return (
    <div style={{ marginTop: '2em', padding: '1em', border: '1px solid #ccc' }}>
      <h3>🧠 Auto Marketing AI</h3>
      <p>Status: <strong>{status}</strong></p>
      <button onClick={startCampaign}>Start Marketing Campaign</button>
    </div>
  );
}

export default AutoMarketingAI;
