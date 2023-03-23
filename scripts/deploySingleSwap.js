const hre = require("hardhat");

async function main() {
	console.log("Deploying...");
	const SingleSwap = await hre.ethers.getContractFactory("SingleSwap");
	const singleSwap = await SingleSwap.deploy();

	await singleSwap.deployed();
	console.log("Single Swap deployed successfully", singleSwap.address);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
