import { Interface } from 'ethers';
import util from 'util';
import { looksRareExchangeABI } from './looks-rare-abi';
import { mapTakerBid } from './mappers/map-taker-bid';

const data1 =
  '0x740244689ddde1bc995e78fa1bd02638bebf1af7dab3e75f3893ba65a8bc633100000000000000000000000000000000000000000000000000000000000000c9000000000000000000000000000000000000000000000000000000000000000100000000000000000000000093c1da9a41776f4ec9528578e0f0c698cfe9623c00000000000000000000000093c1da9a41776f4ec9528578e0f0c698cfe9623c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bf82d61b38408ce37d40d484be3dee8464d54ab900000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000000000220000000000000000000000000c4a396672f7d736a9550b7d3678a64081d74b62400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011acbc73c1f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016bcc41e9000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000001ac00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001';
const topics1 = [
  '0x3ee3de4684413690dee6fff1a0a4f92916a1b97d1c5a83cdf24671844306b2e3',
];

export const looksRareExchangeInterface = new Interface(looksRareExchangeABI);

const parsedLog = looksRareExchangeInterface.parseLog({
  data: data1,
  topics: topics1,
});

if (parsedLog) {
  console.log(util.inspect(mapTakerBid(parsedLog), false, null, true));
}
