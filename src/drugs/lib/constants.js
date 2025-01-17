import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WBNB: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  DRUGSYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  drugs: {
    97: '0x70e0e240e3EE108318d362a7A358Fec792A84cc9',
  },
  originalGangster: {
    97: '0xD2AB202a5C4c1ba8e5a1032ea732aD6A72D28202',
  },
  wbnb: {
    97: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
  },
  Hoes: {
    97: '0x9679277382d9ae719B1bb8F5E5a4006097E1e09A'
  },
  GunsStaker: {
    97: '0xf499d79Ac73569220c91F4bd016f328e40F983F2'
  },
  cred: {
    97: '0x571D0B55fe30eb1F6E68e8799F181c46De6B0059'
  },
  thugs: {
    97: '0xE10e9822A5de22F8761919310DDA35CD997d63c0'
  },
  olddrugs: {
    97: '0x3009C9C09a467aAEA1c8D8cd6ebD18BFb4339b9B'
  },
  GunsToken: {
    97: '0x179983892ec36287f1f342443b671ba549762241'
  }
}

/*
SLP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 DRUGS 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export const supportedPools = [
  {
    pid: 3,
    lpAddresses: {
      97: '0x8963301c9e34d10c4f33f8930e0fae4473a7d3b2',
    },
    tokenAddresses: {
      97: '0x70e0e240e3EE108318d362a7A358Fec792A84cc9',
    },
    name: 'DrugsV2',
    symbol: 'StreetSwap: DRUGS-BNB LP',
    tokenSymbol: 'DRUGS',
    icon: '💊️',
    lppairurl: 'https://streetswap.info/pair/0x8963301c9e34d10c4f33f8930e0fae4473a7d3b2',
    lpaddurl: 'https://streetswap.vip/#/add/BNB/0x70e0e240e3EE108318d362a7A358Fec792A84cc9',
  },  
  {
    pid: 1,
    lpAddresses: {
      97: '0xbd0ded4EADD17E793561942Bd51c786c46206b42',
    },
    tokenAddresses: {
      97: '0x3009C9C09a467aAEA1c8D8cd6ebD18BFb4339b9B',
    },
    name: 'Just for testing',
    symbol: 'StreetSwap: OLDDRUGS-BNB LP',
    tokenSymbol: 'OLDDRUGS',
    icon: '🖕️',
    lppairurl: 'https://streetswap.info/pair/0xbd0ded4EADD17E793561942Bd51c786c46206b42',
    lpaddurl: 'https://streetswap.vip/#/add/BNB/0x3009C9C09a467aAEA1c8D8cd6ebD18BFb4339b9B',
  },  
  {
    pid: 2,
    lpAddresses: {
      97: '0x81aCa0c535bb13e0cD2F10A3c6E4DC1b9Bbe6c0e',
    },
    tokenAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
    },
    name: 'Testing BUSD',
    symbol: 'StreetSwap: BUSD-BNB LP',
    tokenSymbol: 'BUSD',
    icon: '💊️',
    lppairurl: 'https://streetswap.info/pair/0x81aCa0c535bb13e0cD2F10A3c6E4DC1b9Bbe6c0e',
    lpaddurl: 'https://streetswap.vip/#/add/0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee/BNB',
  },
]
