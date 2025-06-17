
/**
 * 📘 USER GUIDE & DISCLAIMER
 * This component is part of the Cryptorythm platform.
 * ⚠️ Disclaimer: All trading involves risk. This platform does not provide financial advice.
 * Users are responsible for their own assets and actions taken through smart contracts or bots.
 */

import React from 'react';

function LegalNotice() {
  return (
    <footer style={ marginTop: '3rem', fontSize: '0.8em', color: '#666' }>
      <p>⚠️ Disclaimer: Use at your own risk. All trades are final. This platform does not hold custody of assets.</p>
      <p>📄 <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Use</a> | <a href="/privacy" target="_blank">Privacy Policy</a></p>
    </footer>
  );
}

export default LegalNotice;
