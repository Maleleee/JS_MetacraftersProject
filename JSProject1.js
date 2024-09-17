
let NFTCollection = [];


function mintNFT(name, eyeColor, shirtType, bling, background) {
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling,
        background: background,
        id: NFTCollection.length + 1
    };
    NFTCollection.push(nft);
    console.log(`Minted NFT: ${nft.name}, ID: ${nft.id}`);
}


function listNFTs() {
    console.log("\nListing all NFTs:");
    NFTCollection.forEach((nft) => {
        console.log(`ID: ${nft.id}, Name: ${nft.name}, Eye Color: ${nft.eyeColor}, Shirt: ${nft.shirtType}, Bling: ${nft.bling}, Background: ${nft.background}`);
    });
}

function getTotalSupply() {
    console.log(`\nTotal NFTs minted: ${NFTCollection.length}`);
}

// Function calls below to test the code

// Mint 3 unique NFTs
mintNFT("CryptoLion", "Blue", "Tuxedo", "Gold Chain", "City Skyline");
mintNFT("CyberWolf", "Red", "Leather Jacket", "Diamond Ring", "Futuristic Grid");
mintNFT("AquaTurtle", "Green", "Hoodie", "Silver Earrings", "Ocean Depths");

// List all NFTs
listNFTs();

// Print the total supply of NFTs
getTotalSupply();
