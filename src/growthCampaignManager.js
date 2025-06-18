// growthCampaignManager.js

/**
 * Generates a growth campaign object for an NFT
 * @param {string} nftName - The name of the NFT
 * @param {string} rarity - The rarity level (e.g., "Rare", "Epic", "Legendary")
 * @returns {object} campaign - Campaign metadata
 */
function generateCampaign(nftName, rarity) {
  const campaign = {
    title: `🌟 ${nftName} Release`,
    description: `${nftName} is a new ultra-${rarity} NFT now available!`,
    media: `/assets/nft/${nftName.replace(/\s+/g, '-').toLowerCase()}.png`,
    channels: ["Twitter", "Discord", "Newsletter"]
  };

  console.log("📦 Campaign Created:", campaign);
  return campaign;
}

export default generateCampaign;
