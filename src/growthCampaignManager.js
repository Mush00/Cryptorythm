
const fs = require('fs');

function generateCampaign(nftName, rarity) {
  const campaign = {
    title: `🌟 ${nftName} Release`,
    description: `${nftName} is a new ultra-${rarity} NFT added this month.`,
    media: `/assets/nft/${nftName.replace(/\s+/g, '_')}.png`,
    channels: ["Twitter", "Discord", "Newsletter"]
  };
  console.log("📦 Campaign Created:", campaign);
  return campaign;
}

generateCampaign("Quantum Prism Relic", "rare");
