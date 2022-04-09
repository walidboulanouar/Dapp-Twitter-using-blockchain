require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: 'the link you get in http of your application in alchemy, you should also verify the name of your test network',
      accounts: [
        'YOUR private key of your metamask wallet',
      ],
    },
  },
};
