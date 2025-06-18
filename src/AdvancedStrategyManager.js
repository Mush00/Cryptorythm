import React, { useState } from 'react';

function AdvancedStrategyManager() {
  const [strategy, setStrategy] = useState({
    name: '',
    entryCondition: '',
    exitCondition: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStrategy((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Strategy "${strategy.name}" saved!`);
    // In real app: send to backend or store
  };

  return (
    <div style={{ marginTop: '2em', fontFamily: 'Arial' }}>
      <h2>🧠 Advanced Strategy Manager</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>📌 Strategy Name:</label><br />
          <input
            type="text"
            name="name"
            value={strategy.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>📥 Entry Condition:</label><br />
          <textarea
            name="entryCondition"
            value={strategy.entryCondition}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>📤 Exit Condition:</label><br />
          <textarea
            name="exitCondition"
            value={strategy.exitCondition}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '1em' }}>💾 Save Strategy</button>
      </form>
    </div>
  );
}

export default AdvancedStrategyManager;
