
import React, { useEffect, useState } from 'react';

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = dark ? '#111' : '#fff';
    document.body.style.color = dark ? '#fff' : '#000';
  }, [dark]);

  return (
    <div style={{ marginTop: '2em' }}>
      <button onClick={() => setDark(!dark)}>
        Toggle {dark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
