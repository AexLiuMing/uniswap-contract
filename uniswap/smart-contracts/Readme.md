# Deploy Uniswap V2 to Pangolin/Crab

This is a Hardhat setup to deploy the necessary contracts of Uniswap.

## Get Started

Clone repo:

```
git clone https://github.com/darwinia/workshop.git
cd workshop/uniswap/smart-contracts
```

Install packages:

```
yarn
```

### Build the contracts
```
yarn build
```

### Test the contracts
```
yarn test
```

### Deploy the contracts Pangolin/Crab
Modify the private keys as you wish in the `hardhat.config.js` file.

To deploy the contracts in Crab you can run:

```sh
#Export your private key
export PRIVATE_KEY=0x.....
yarn deploy:pangolin
yarn deploy:crab
```

**Note: the interface works on Crab with the contracts address baked in the SDK. To make sure that the interface works with your deployment you need to modify both the Interface and SDK repos**
