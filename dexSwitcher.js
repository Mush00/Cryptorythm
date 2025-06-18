import React, { useState } from 'react';
import { dexConfig } from './dexSwitcherConfig';

function DexSwitcher({ onDexChange }) {
  const [selectedDex, setSelectedDex] = useState(dexConfig.defaultDEX);

  const handleChange = (e) => {
    const dex = e.target.value;
    setSelectedDex(dex);
    onDexChange(dexConfig.supportedDEXs[dex]);
  };

  return (
    <div style={{ marginTop: '2em' }}>
      <h2>🔁 Switch DEX</h2>
      <select value={selectedDex} onChange={handleChange}>
        {Object.keys(dexConfig.supportedDEXs).map(dex => (
          <option key={dex} value={dex}>{dex}</option>
        ))}
      </select>
    </div>
  );
}

export default DexSwitcher;
