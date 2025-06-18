import React, { useEffect } from 'react';

function AnalyticsTracker() {
  useEffect(() => {
    console.log("📈 Analytics initialized");
    // Simulate sending page view
  }, []);

  return (
    <div style={{ fontSize: '0.9rem', color: 'gray', marginTop: '1em' }}>
      📊 User analytics tracking enabled.
    </div>
  );
}

export default AnalyticsTracker;
