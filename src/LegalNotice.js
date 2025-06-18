import React from 'react';

/**
 * 📘 LegalNotice Footer Component
 * Displays disclaimer and terms link
 */
function LegalNotice() {
  const footerStyle = {
    marginTop: '3rem',
    fontSize: '14px',
    padding: '1rem',
    borderTop: '1px solid #ccc',
    color: '#555',
    textAlign: 'center',
    backgroundColor: '#f9f9f9'
  };

  return (
    <footer style={footerStyle}>
      <p>⚠️ Disclaimer: Use at your own risk. This is not financial advice.</p>
      <p>📄 <a href="/terms" target="_blank" rel="noopener noreferrer">Read our full Terms and Conditions</a></p>
    </footer>
  );
}

export default LegalNotice;
