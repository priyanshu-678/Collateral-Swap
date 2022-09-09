require("dotenv").config();

const USDC = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
const USDT = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
const WETH = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";
const DAI = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";
const WBTC = "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6";

const DAI_WHALE = process.env.DAI_WHALE;
const USDC_WHALE = process.env.USDC_WHALE;
const USDT_WHALE = process.env.USDT_WHALE;
const WETH_WHALE = process.env.WETH_WHALE;
const WBTC_WHALE = process.env.WBTC_WHALE;

// compound
const CDAI = "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643";
const CUSDC = "0x39AA39c021dfbaE8faC545936693aC917d5E7563";
const CWBTC = "0xccF4429DB6322D5C611ee964527D42E5d685DD6a";
const CETH = "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5";

module.exports = {
  DAI,
  USDC,
  USDT,
  WETH,
  WBTC,
  DAI_WHALE,
  USDC_WHALE,
  USDT_WHALE,
  WETH_WHALE,
  WBTC_WHALE,
  CDAI,
  CUSDC,
  CWBTC,
  CETH,
};
