import React, { useState } from 'react';

function OnboardingWizard() {
  const [step, setStep] = useState(0);

  const steps = [
    "🔑 Connect your wallet",
    "🌕 Mint your first NFT",
    "📩 Participate in DAO voting",
    "🎨 Visit the NFT Vault"
  ];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      alert("🎉 Onboarding Complete!");
    }
  };

  return (
    <div style={{ marginTop: '2em', padding: '1em', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px' }}>
      <h2>🚀 Getting Started</h2>
      <p>{steps[step]}</p>

      <button
        onClick={nextStep}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {step === steps.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default OnboardingWizard;
