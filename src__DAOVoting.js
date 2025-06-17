
import React, { useState } from 'react';

const proposals = [
  { id: 1, title: "Add new NFT: LunarCore Relic", votes: 0 },
  { id: 2, title: "Enable Polygon chain support", votes: 0 }
];

function DAOVoting() {
  const [voted, setVoted] = useState({});

  const vote = (id) => {
    if (!voted[id]) {
      proposals[id - 1].votes++;
      setVoted({ ...voted, [id]: true });
    }
  };

  return (
    <div style={{ marginTop: '2em' }}>
      <h2>🗳 DAO Proposals</h2>
      {proposals.map(p => (
        <div key={p.id}>
          <p><strong>{p.title}</strong> - Votes: {p.votes}</p>
          <button onClick={() => vote(p.id)} disabled={voted[p.id]}>Vote</button>
        </div>
      ))}
    </div>
  );
}

export default DAOVoting;
