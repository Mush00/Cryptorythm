
import React, { useEffect } from 'react';

function AnalyticsTracker() {
  useEffect(() => {
    console.log("📈 Analytics initialized");
    // Simulate sending page view
  }, []);

  return null;
}

export default AnalyticsTracker;
