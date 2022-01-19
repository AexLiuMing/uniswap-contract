/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');

// Change private keys accordingly - ONLY FOR DEMOSTRATION PURPOSES - PLEASE STORE PRIVATE KEYS IN A SAFE PLACE
// Export your private key as
//       export PRIVATE_KEY=0x.....
const privateKey = process.env.PRIVATE_KEY;
const privateKeyDev =
   '0x99b3c12287537e38c90a9219d4cb074a89a16e9cdb20bf85728ebd97c343e342';

module.exports = {
   defaultNetwork: 'hardhat',

   networks: {
      hardhat: {},

      pangolin: {
         url: 'https://pangolin-rpc.darwinia.network',
         accounts: [privateKey],
         chainId: 43,
      },
      crab: {
         url: 'https://crab-rpc.darwinia.network',
         accounts: [privateKey],
         chainId: 44,
      },
      dev: {
         url: 'http://127.0.0.1:9933',
         accounts: [privateKeyDev],
         network_id: '*',
      },
   },
   solidity: {
      compilers: [
         {
            version: '0.5.16',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
         {
            version: '0.6.6',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000,
   },
};
