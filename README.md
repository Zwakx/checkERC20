# ERC20 checker

Trying to check if we can detect if newly created contract are ERC20 using bytecode

## Setup

- Copy the repo : `git clone https://`
- Install packages : `npm i`
- Create a `.env` file
- Type the following in the `.env`

```bash

CHAIN_ID = 43114
AVAX_WSS_MAINNET = <wss://<PATH_TO_NODE>>
AVAX_WSS_TESTNET = <wss://<PATH_TO_NODE>>

```

- To run the code, type : `ts-node index.ts`