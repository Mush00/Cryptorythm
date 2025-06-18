import React, { useEffect, useState } from 'react';

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.style.transition = 'all 0.3s ease';
    document.body.style.backgroundColor = dark ? '#121212' : '#ffffff';
    document.body.style.color = dark ? '#f1f1f1' : '#121212';
  }, [dark]);

  return (
    <div style={{ marginTop: '2em', textAlign: 'center' }}>
      <button
        onClick={() => setDark(!dark)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '6px',
          background: dark ? '#444' : '#eee',
          color: dark ? '#fff' : '#000',
          border: 'none',
          cursor: 'pointer'
        }}
        aria-label="Toggle theme"
      >
        {dark ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}

export default ThemeToggle;
