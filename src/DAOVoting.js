import React, { useState } from 'react';

function DAOVoting() {
  const [votes, setVotes] = useState({ yes: 0, no: 0 });

  const handleVote = (option) => {
    setVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
    alert(`🗳️ You voted ${option.toUpperCase()}`);
  };

  return (
    <div style={{ marginTop: '2em', padding: '1em', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>🗳️ DAO Voting</h2>
      <p>Proposal: Should we add new AI trading model?</p>
      <button onClick={() => handleVote('yes')} style={{ marginRight: '10px' }}>✅ Yes</button>
      <button onClick={() => handleVote('no')}>❌ No</button>
      <p style={{ marginTop: '1em' }}>Current Votes:</p>
      <ul>
        <li>✅ Yes: {votes.yes}</li>
        <li>❌ No: {votes.no}</li>
      </ul>
    </div>
  );
}

export default DAOVoting;
