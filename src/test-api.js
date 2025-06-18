// test-api.js
// 📡 This script tests the backend API endpoint for NFT data.
// It fetches data from the local server at http://localhost:5000/api/nfts

fetch('http://localhost:5000/api/nfts')
  .then(res => res.json())                            // 🔄 Converts the response to JSON
  .then(data => console.log("NFTs from API:", data)) // 📦 Logs the data received from the server
  .catch(err => console.error("API Error:", err));   // ❌ Handles any network/server errors
