// growthCampaignManager.js

const fs = require('fs');

/**
 * Generates a growth campaign object for an NFT.
 * @param {string} nftName - The name of the NFT.
 * @param {string} rarity - The rarity level.
 * @returns {object} campaign - Campaign metadata.
 */
function generateCampaign(nftName, rarity) {
  const campaign = {
    title: `🌟 ${nftName} Release`,
    description: `${nftName} is a new ultra-rare ${rarity} NFT.`,
    media: `/assets/nft/${nftName.replace(/\s+/g, '_').toLowerCase()}.png`,
    channels: ["Twitter", "Discord", "Newsletter"]
  };

  console.log("📦 Campaign Created:", campaign);
  return campaign;
}

module.exports = { generateCampaign };
