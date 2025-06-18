import React, { useState } from 'react';

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.body.style.transition = 'all 0.3s ease';

    if (darkMode) {
      // Light mode styles
      document.body.style.background = '#ffffff';
      document.body.style.color = '#121212';
    } else {
      // Dark mode styles
      document.body.style.background = '#121212';
      document.body.style.color = '#ffffff';
    }

    setDarkMode(!darkMode);
  };

  return (
    <div style={{ marginTop: '2em' }}>
      <button 
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '6px',
          background: darkMode ? '#444' : '#ddd',
          color: darkMode ? '#fff' : '#000',
          border: 'none',
          cursor: 'pointer'
        }}
        aria-label="Toggle theme"
      >
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}

export default ThemeSwitch;
