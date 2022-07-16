require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "songbird",
  networks: {
    hardhat: {},
    songbird: {
      url: "https://songbird.towolabs.com/rpc",
      chainId: 19,
      accounts: ["private_key"],
      gas: 21000000,
      gasPrice: "auto",
      gasLimit: 50000,
      gasMultiplier: 3,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};
