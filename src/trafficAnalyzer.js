// trafficAnalyzer.js
// 📈 Analyzes and logs mock website traffic data (views, top NFT, and bounce rate)

const dummyTraffic = {
  views: 1287,                               // 👀 Total site views
  topNFT: "StellarBloom Nexus",             // 🌟 NFT with most attention
  bounceRate: "42%",                         // 🔁 Bounce rate percentage
};

function analyzeTraffic() {
  console.log("📈 Daily Analytics:");                              // 📋 Section header
  console.log("👀 Views:", dummyTraffic.views);                   // Log total views
  console.log("🔥 Top NFT:", dummyTraffic.topNFT);               // Highlight the top NFT
  console.log("🔁 Bounce Rate:", dummyTraffic.bounceRate);       // Bounce rate percentage
}

analyzeTraffic(); // 🚀 Executes the traffic analysis immediately
