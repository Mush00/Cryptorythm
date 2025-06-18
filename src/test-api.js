
fetch('http://localhost:5000/api/nfts')
  .then(res => res.json())
  .then(data => console.log("NFTs from API:", data))
  .catch(err => console.error("API Error:", err));
