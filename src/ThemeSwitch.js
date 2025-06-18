
/**
 * 🌓 ThemeSwitch Component - Toggle between light and dark mode
 */
import React, { useState } from 'react';

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.body.style.background = darkMode ? '#fff' : '#111';
    document.body.style.color = darkMode ? '#000' : '#fff';
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleTheme}>
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default ThemeSwitch;
