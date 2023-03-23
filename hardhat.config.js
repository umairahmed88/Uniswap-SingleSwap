require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.7.6",
	networks: {
		goerli: {
			url: process.env.GOERLI_RPC_URL,
			accounts: [process.env.PRIVATE_KEY],
		},
	},
};
