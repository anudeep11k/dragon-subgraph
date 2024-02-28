const WKLAY = "0x19aac5f612f524b754ca7e7c41cbfa2e981a4432";
const KLAYTN_USDT = "0x5c13e303a62fc5dedf5b52d66873f2e59fedadc2";
const KLAYTN_USDC = "0x608792deb376cce1c9fa4d0e6b7b44f507cffa6a";
const KLAYTN_WETH = "0x98a8345bb9d3dda9d808ca1c9142a28f6b0430e1";
const KLAYTN_BTCB = "0x15d9f3ab1982b0e5a415451259994ff40369f584";
/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "cypress",
  wNativeAddress: WKLAY,
  v3: {
    wNativeStablePoolAddress: "0xb64ba987ed3bd9808dbcc19ee3c2a3c79a977e66",
    stableIsToken0: false,
    factoryAddress: "0x7431A23897ecA6913D5c81666345D39F27d946A4",
    startBlock: 145315248,
    stableCoins: [KLAYTN_USDT, KLAYTN_USDC],
    whitelistAddresses: [WKLAY, KLAYTN_USDT, KLAYTN_USDC, KLAYTN_WETH, KLAYTN_BTCB],
    nonfungiblePositionManagerAddress: "0x68f762d28CebaD501c090949e4680697e56848fC",
    nonfungiblePositionManagerStartBlock: 145315281,
    minETHLocked: 1,
  },
  v2: {
    factoryAddress: "0x224302153096E3ba16c4423d9Ba102D365a94B2B",
    startBlock: 145315220,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000", // USDC-WKLAY(stable - wklay)
    wNativeStablePair1: "0xd8474b3a9950493621c5a8445debe65f32535340", // WKLAY-USDT(wklay - stable)
    whitelistAddresses: [WKLAY, KLAYTN_USDT, KLAYTN_USDC, KLAYTN_WETH, KLAYTN_BTCB],
    minETHLocked: 5,
  },
  masterChefV3: {
    masterChefAddress: "0xB845fB78C78d349ec08d47C2cCdC564baD2f67B0",
    startBlock: 146504214,
  },
};
