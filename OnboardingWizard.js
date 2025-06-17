
import React, { useState } from 'react';

function OnboardingWizard() {
  const [step, setStep] = useState(0);
  const steps = [
    "🔑 Connect your wallet",
    "🪙 Mint your first NFT",
    "🗳 Participate in DAO voting",
    "🎨 Visit the NFT Vault"
  ];

  return (
    <div style={{ marginTop: '2em' }}>
      <h2>🚀 Getting Started</h2>
      <p>{steps[step]}</p>
      <button onClick={() => setStep(step + 1)} disabled={step === steps.length - 1}>
        {step === steps.length - 1 ? "Done" : "Next"}
      </button>
    </div>
  );
}

export default OnboardingWizard;
