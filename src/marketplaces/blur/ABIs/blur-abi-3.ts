export type BlurExchange3ABIEvents =
  | 'AdminChanged'
  | 'BeaconUpgraded'
  | 'CancelTrade'
  | 'Execution'
  | 'Execution721MakerFeePacked'
  | 'Execution721Packed'
  | 'Execution721TakerFeePacked'
  | 'Initialized'
  | 'NewBlockRange'
  | 'NewGovernor'
  | 'NewProtocolFee'
  | 'NonceIncremented'
  | 'OwnershipTransferStarted'
  | 'OwnershipTransferred'
  | 'SetOracle'
  | 'Upgraded';

export type BlurExchange3ABIMethods =
  | 'acceptOwnership'
  | 'amountTaken'
  | 'blockRange'
  | 'cancelTrades'
  | 'governor'
  | 'hashListing'
  | 'hashOrder'
  | 'hashTakeAsk'
  | 'hashTakeAskSingle'
  | 'hashTakeBid'
  | 'hashTakeBidSingle'
  | 'incrementNonce'
  | 'information'
  | 'initialize'
  | 'nonces'
  | 'oracles'
  | 'owner'
  | 'pendingOwner'
  | 'protocolFee'
  | 'proxiableUUID'
  | 'renounceOwnership'
  | 'setBlockRange'
  | 'setGovernor'
  | 'setOracle'
  | 'setProtocolFee'
  | 'takeAsk'
  | 'takeAskPool'
  | 'takeAskSingle'
  | 'takeAskSinglePool'
  | 'takeBid'
  | 'takeBidSingle'
  | 'transferOwnership'
  | 'upgradeTo'
  | 'upgradeToAndCall'
  | 'verifyDomain';

export const EXECUTION_721_PACKED_KECCAK_HASH =
  '0x1d5e12b51dee5e4d34434576c3fb99714a85f57b0fd546ada4b0bddd736d12b2';

export const blurMarketplace3ABI = [
  {
    inputs: [
      { internalType: 'address', name: 'delegate', type: 'address' },
      { internalType: 'address', name: 'pool', type: 'address' },
      { internalType: 'address', name: 'proxy', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  { inputs: [], name: 'ETHTransferFailed', type: 'error' },
  { inputs: [], name: 'ExpiredOracleSignature', type: 'error' },
  { inputs: [], name: 'InsufficientFunds', type: 'error' },
  { inputs: [], name: 'InvalidDomain', type: 'error' },
  { inputs: [], name: 'InvalidOracleSignature', type: 'error' },
  { inputs: [], name: 'InvalidOrder', type: 'error' },
  { inputs: [], name: 'OrderFulfilled', type: 'error' },
  { inputs: [], name: 'PoolDepositFailed', type: 'error' },
  { inputs: [], name: 'PoolTransferFailed', type: 'error' },
  { inputs: [], name: 'PoolWithdrawFromFailed', type: 'error' },
  { inputs: [], name: 'ProtocolFeeTooHigh', type: 'error' },
  { inputs: [], name: 'TokenTransferFailed', type: 'error' },
  { inputs: [], name: 'Unauthorized', type: 'error' },
  { inputs: [], name: 'UnauthorizedOracle', type: 'error' },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
    ],
    name: 'BeaconUpgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'hash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'CancelTrade',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'trader', type: 'address' },
          { internalType: 'uint256', name: 'id', type: 'uint256' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'address', name: 'collection', type: 'address' },
          { internalType: 'enum AssetType', name: 'assetType', type: 'uint8' },
        ],
        indexed: false,
        internalType: 'struct Transfer',
        name: 'transfer',
        type: 'tuple',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'orderHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'listingIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        components: [
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint16', name: 'rate', type: 'uint16' },
        ],
        indexed: false,
        internalType: 'struct FeeRate',
        name: 'makerFee',
        type: 'tuple',
      },
      {
        components: [
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint16', name: 'rate', type: 'uint16' },
            ],
            internalType: 'struct FeeRate',
            name: 'protocolFee',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint16', name: 'rate', type: 'uint16' },
            ],
            internalType: 'struct FeeRate',
            name: 'takerFee',
            type: 'tuple',
          },
        ],
        indexed: false,
        internalType: 'struct Fees',
        name: 'fees',
        type: 'tuple',
      },
      {
        indexed: false,
        internalType: 'enum OrderType',
        name: 'orderType',
        type: 'uint8',
      },
    ],
    name: 'Execution',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'orderHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenIdListingIndexTrader',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'collectionPriceSide',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'makerFeeRecipientRate',
        type: 'uint256',
      },
    ],
    name: 'Execution721MakerFeePacked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'orderHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenIdListingIndexTrader',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'collectionPriceSide',
        type: 'uint256',
      },
    ],
    name: 'Execution721Packed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'orderHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenIdListingIndexTrader',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'collectionPriceSide',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'takerFeeRecipientRate',
        type: 'uint256',
      },
    ],
    name: 'Execution721TakerFeePacked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint8', name: 'version', type: 'uint8' },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'blockRange',
        type: 'uint256',
      },
    ],
    name: 'NewBlockRange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'governor',
        type: 'address',
      },
    ],
    name: 'NewGovernor',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      { indexed: true, internalType: 'uint16', name: 'rate', type: 'uint16' },
    ],
    name: 'NewProtocolFee',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newNonce',
        type: 'uint256',
      },
    ],
    name: 'NonceIncremented',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' },
    ],
    name: 'SetOracle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'bytes32', name: '', type: 'bytes32' },
      { internalType: 'uint256', name: '', type: 'uint256' },
    ],
    name: 'amountTaken',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'blockRange',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bytes32', name: 'hash', type: 'bytes32' },
          { internalType: 'uint256', name: 'index', type: 'uint256' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        internalType: 'struct Cancel[]',
        name: 'cancels',
        type: 'tuple[]',
      },
    ],
    name: 'cancelTrades',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'governor',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'uint256', name: 'index', type: 'uint256' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'uint256', name: 'price', type: 'uint256' },
        ],
        internalType: 'struct Listing',
        name: 'listing',
        type: 'tuple',
      },
    ],
    name: 'hashListing',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'trader', type: 'address' },
          { internalType: 'address', name: 'collection', type: 'address' },
          { internalType: 'bytes32', name: 'listingsRoot', type: 'bytes32' },
          {
            internalType: 'uint256',
            name: 'numberOfListings',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'expirationTime', type: 'uint256' },
          { internalType: 'enum AssetType', name: 'assetType', type: 'uint8' },
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint16', name: 'rate', type: 'uint16' },
            ],
            internalType: 'struct FeeRate',
            name: 'makerFee',
            type: 'tuple',
          },
          { internalType: 'uint256', name: 'salt', type: 'uint256' },
        ],
        internalType: 'struct Order',
        name: 'order',
        type: 'tuple',
      },
      { internalType: 'enum OrderType', name: 'orderType', type: 'uint8' },
    ],
    name: 'hashOrder',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: 'address', name: 'trader', type: 'address' },
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                internalType: 'bytes32',
                name: 'listingsRoot',
                type: 'bytes32',
              },
              {
                internalType: 'uint256',
                name: 'numberOfListings',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'expirationTime',
                type: 'uint256',
              },
              {
                internalType: 'enum AssetType',
                name: 'assetType',
                type: 'uint8',
              },
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'recipient',
                    type: 'address',
                  },
                  { internalType: 'uint16', name: 'rate', type: 'uint16' },
                ],
                internalType: 'struct FeeRate',
                name: 'makerFee',
                type: 'tuple',
              },
              { internalType: 'uint256', name: 'salt', type: 'uint256' },
            ],
            internalType: 'struct Order[]',
            name: 'orders',
            type: 'tuple[]',
          },
          {
            components: [
              { internalType: 'uint256', name: 'index', type: 'uint256' },
              { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
              {
                components: [
                  { internalType: 'uint256', name: 'index', type: 'uint256' },
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                  { internalType: 'uint256', name: 'price', type: 'uint256' },
                ],
                internalType: 'struct Listing',
                name: 'listing',
                type: 'tuple',
              },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                ],
                internalType: 'struct Taker',
                name: 'taker',
                type: 'tuple',
              },
            ],
            internalType: 'struct Exchange[]',
            name: 'exchanges',
            type: 'tuple[]',
          },
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint16', name: 'rate', type: 'uint16' },
            ],
            internalType: 'struct FeeRate',
            name: 'takerFee',
            type: 'tuple',
          },
          { internalType: 'bytes', name: 'signatures', type: 'bytes' },
          { internalType: 'address', name: 'tokenRecipient', type: 'address' },
        ],
        internalType: 'struct TakeAsk',
        name: 'inputs',
        type: 'tuple',
      },
      { internalType: 'address', name: '_caller', type: 'address' },
    ],
    name: 'hashTakeAsk',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: 'address', name: 'trader', type: 'address' },
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                internalType: 'bytes32',
                name: 'listingsRoot',
                type: 'bytes32',
              },
              {
                internalType: 'uint256',
                name: 'numberOfListings',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'expirationTime',
                type: 'uint256',
              },
              {
                internalType: 'enum AssetType',
                name: 'assetType',
                type: 'uint8',
              },
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'recipient',
                    type: 'address',
                  },
                  { internalType: 'uint16', name: 'rate', type: 'uint16' },
                ],
                internalType: 'struct FeeRate',
                name: 'makerFee',
                type: 'tuple',
              },
              { internalType: 'uint256', name: 'salt', type: 'uint256' },
            ],
            internalType: 'struct Order',
            name: 'order',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256', name: 'index', type: 'uint256' },
              { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
              {
                components: [
                  { internalType: 'uint256', name: 'index', type: 'uint256' },
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                  { internalType: 'uint256', name: 'price', type: 'uint256' },
                ],
                internalType: 'struct Listing',
                name: 'listing',
                type: 'tuple',
              },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                ],
                internalType: 'struct Taker',
                name: 'taker',
                type: 'tuple',
              },
            ],
            internalType: 'struct Exchange',
            name: 'exchange',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint16', name: 'rate', type: 'uint16' },
            ],
            internalType: 'struct FeeRate',
            name: 'takerFee',
            type: 'tuple',
          },
          { internalType: 'bytes', name: 'signature', type: 'bytes' },
          { internalType: 'address', name: 'tokenRecipient', type: 'address' },
        ],
        internalType: 'struct TakeAskSingle',
        name: 'inputs',
        type: 'tuple',
      },
      { internalType: 'address', name: '_caller', type: 'address' },
    ],
    name: 'hashTakeAskSingle',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: 'address', name: 'trader', type: 'address' },
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                internalType: 'bytes32',
                name: 'listingsRoot',
                type: 'bytes32',
              },
              {
                internalType: 'uint256',
                name: 'numberOfListings',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'expirationTime',
                type: 'uint256',
              },
              {
                internalType: 'enum AssetType',
                name: 'assetType',
                type: 'uint8',
              },
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'recipient',
                    type: 'address',
                  },
                  { internalType: 'uint16', name: 'rate', type: 'uint16' },
                ],
                internalType: 'struct FeeRate',
                name: 'makerFee',
                type: 'tuple',
              },
              { internalType: 'uint256', name: 'salt', type: 'uint256' },
            ],
            internalType: 'struct Order[]',
            name: 'orders',
            type: 'tuple[]',
          },
          {
            components: [
              { internalType: 'uint256', name: 'index', type: 'uint256' },
              { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
              {
                components: [
                  { internalType: 'uint256', name: 'index', type: 'uint256' },
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                  { internalType: 'uint256', name: 'price', type: 'uint256' },
                ],
                internalType: 'struct Listing',
                name: 'listing',
                type: 'tuple',
              },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                ],
                internalType: 'struct Taker',
                name: 'taker',
                type: 'tuple',
              },
            ],
            internalType: 'struct Exchange[]',
            name: 'exchanges',
            type: 'tuple[]',
          },
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint16', name: 'rate', type: 'uint16' },
            ],
            internalType: 'struct FeeRate',
            name: 'takerFee',
            type: 'tuple',
          },
          { internalType: 'bytes', name: 'signatures', type: 'bytes' },
        ],
        internalType: 'struct TakeBid',
        name: 'inputs',
        type: 'tuple',
      },
      { internalType: 'address', name: '_caller', type: 'address' },
    ],
    name: 'hashTakeBid',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: 'address', name: 'trader', type: 'address' },
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                internalType: 'bytes32',
                name: 'listingsRoot',
                type: 'bytes32',
              },
              {
                internalType: 'uint256',
                name: 'numberOfListings',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'expirationTime',
                type: 'uint256',
              },
              {
                internalType: 'enum AssetType',
                name: 'assetType',
                type: 'uint8',
              },
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'recipient',
                    type: 'address',
                  },
                  { internalType: 'uint16', name: 'rate', type: 'uint16' },
                ],
                internalType: 'struct FeeRate',
                name: 'makerFee',
                type: 'tuple',
              },
              { internalType: 'uint256', name: 'salt', type: 'uint256' },
            ],
            internalType: 'struct Order',
            name: 'order',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256', name: 'index', type: 'uint256' },
              { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
              {
                components: [
                  { internalType: 'uint256', name: 'index', type: 'uint256' },
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                  { internalType: 'uint256', name: 'price', type: 'uint256' },
                ],
                internalType: 'struct Listing',
                name: 'listing',
                type: 'tuple',
              },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                ],
                internalType: 'struct Taker',
                name: 'taker',
                type: 'tuple',
              },
            ],
            internalType: 'struct Exchange',
            name: 'exchange',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint16', name: 'rate', type: 'uint16' },
            ],
            internalType: 'struct FeeRate',
            name: 'takerFee',
            type: 'tuple',
          },
          { internalType: 'bytes', name: 'signature', type: 'bytes' },
        ],
        internalType: 'struct TakeBidSingle',
        name: 'inputs',
        type: 'tuple',
      },
      { internalType: 'address', name: '_caller', type: 'address' },
    ],
    name: 'hashTakeBidSingle',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'incrementNonce',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'information',
    outputs: [
      { internalType: 'string', name: 'version', type: 'string' },
      { internalType: 'bytes32', name: 'domainSeparator', type: 'bytes32' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'nonces',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'oracles',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'protocolFee',
    outputs: [
      { internalType: 'address', name: 'recipient', type: 'address' },
      { internalType: 'uint16', name: 'rate', type: 'uint16' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_blockRange', type: 'uint256' }],
    name: 'setBlockRange',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_governor', type: 'address' }],
    name: 'setGovernor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'oracle', type: 'address' },
      { internalType: 'bool', name: 'approved', type: 'bool' },
    ],
    name: 'setOracle',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'recipient', type: 'address' },
      { internalType: 'uint16', name: 'rate', type: 'uint16' },
    ],
    name: 'setProtocolFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: 'address', name: 'trader', type: 'address' },
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                internalType: 'bytes32',
                name: 'listingsRoot',
                type: 'bytes32',
              },
              {
                internalType: 'uint256',
                name: 'numberOfListings',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'expirationTime',
                type: 'uint256',
              },
              {
                internalType: 'enum AssetType',
                name: 'assetType',
                type: 'uint8',
              },
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'recipient',
                    type: 'address',
                  },
                  { internalType: 'uint16', name: 'rate', type: 'uint16' },
                ],
                internalType: 'struct FeeRate',
                name: 'makerFee',
                type: 'tuple',
              },
              { internalType: 'uint256', name: 'salt', type: 'uint256' },
            ],
            internalType: 'struct Order[]',
            name: 'orders',
            type: 'tuple[]',
          },
          {
            components: [
              { internalType: 'uint256', name: 'index', type: 'uint256' },
              { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
              {
                components: [
                  { internalType: 'uint256', name: 'index', type: 'uint256' },
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                  { internalType: 'uint256', name: 'price', type: 'uint256' },
                ],
                internalType: 'struct Listing',
                name: 'listing',
                type: 'tuple',
              },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                ],
                internalType: 'struct Taker',
                name: 'taker',
                type: 'tuple',
              },
            ],
            internalType: 'struct Exchange[]',
            name: 'exchanges',
            type: 'tuple[]',
          },
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint16', name: 'rate', type: 'uint16' },
            ],
            internalType: 'struct FeeRate',
            name: 'takerFee',
            type: 'tuple',
          },
          { internalType: 'bytes', name: 'signatures', type: 'bytes' },
          { internalType: 'address', name: 'tokenRecipient', type: 'address' },
        ],
        internalType: 'struct TakeAsk',
        name: 'inputs',
        type: 'tuple',
      },
      { internalType: 'bytes', name: 'oracleSignature', type: 'bytes' },
    ],
    name: 'takeAsk',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: 'address', name: 'trader', type: 'address' },
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                internalType: 'bytes32',
                name: 'listingsRoot',
                type: 'bytes32',
              },
              {
                internalType: 'uint256',
                name: 'numberOfListings',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'expirationTime',
                type: 'uint256',
              },
              {
                internalType: 'enum AssetType',
                name: 'assetType',
                type: 'uint8',
              },
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'recipient',
                    type: 'address',
                  },
                  { internalType: 'uint16', name: 'rate', type: 'uint16' },
                ],
                internalType: 'struct FeeRate',
                name: 'makerFee',
                type: 'tuple',
              },
              { internalType: 'uint256', name: 'salt', type: 'uint256' },
            ],
            internalType: 'struct Order[]',
            name: 'orders',
            type: 'tuple[]',
          },
          {
            components: [
              { internalType: 'uint256', name: 'index', type: 'uint256' },
              { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
              {
                components: [
                  { internalType: 'uint256', name: 'index', type: 'uint256' },
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                  { internalType: 'uint256', name: 'price', type: 'uint256' },
                ],
                internalType: 'struct Listing',
                name: 'listing',
                type: 'tuple',
              },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                ],
                internalType: 'struct Taker',
                name: 'taker',
                type: 'tuple',
              },
            ],
            internalType: 'struct Exchange[]',
            name: 'exchanges',
            type: 'tuple[]',
          },
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint16', name: 'rate', type: 'uint16' },
            ],
            internalType: 'struct FeeRate',
            name: 'takerFee',
            type: 'tuple',
          },
          { internalType: 'bytes', name: 'signatures', type: 'bytes' },
          { internalType: 'address', name: 'tokenRecipient', type: 'address' },
        ],
        internalType: 'struct TakeAsk',
        name: 'inputs',
        type: 'tuple',
      },
      { internalType: 'bytes', name: 'oracleSignature', type: 'bytes' },
      { internalType: 'uint256', name: 'amountToWithdraw', type: 'uint256' },
    ],
    name: 'takeAskPool',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: 'address', name: 'trader', type: 'address' },
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                internalType: 'bytes32',
                name: 'listingsRoot',
                type: 'bytes32',
              },
              {
                internalType: 'uint256',
                name: 'numberOfListings',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'expirationTime',
                type: 'uint256',
              },
              {
                internalType: 'enum AssetType',
                name: 'assetType',
                type: 'uint8',
              },
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'recipient',
                    type: 'address',
                  },
                  { internalType: 'uint16', name: 'rate', type: 'uint16' },
                ],
                internalType: 'struct FeeRate',
                name: 'makerFee',
                type: 'tuple',
              },
              { internalType: 'uint256', name: 'salt', type: 'uint256' },
            ],
            internalType: 'struct Order',
            name: 'order',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256', name: 'index', type: 'uint256' },
              { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
              {
                components: [
                  { internalType: 'uint256', name: 'index', type: 'uint256' },
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                  { internalType: 'uint256', name: 'price', type: 'uint256' },
                ],
                internalType: 'struct Listing',
                name: 'listing',
                type: 'tuple',
              },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                ],
                internalType: 'struct Taker',
                name: 'taker',
                type: 'tuple',
              },
            ],
            internalType: 'struct Exchange',
            name: 'exchange',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint16', name: 'rate', type: 'uint16' },
            ],
            internalType: 'struct FeeRate',
            name: 'takerFee',
            type: 'tuple',
          },
          { internalType: 'bytes', name: 'signature', type: 'bytes' },
          { internalType: 'address', name: 'tokenRecipient', type: 'address' },
        ],
        internalType: 'struct TakeAskSingle',
        name: 'inputs',
        type: 'tuple',
      },
      { internalType: 'bytes', name: 'oracleSignature', type: 'bytes' },
    ],
    name: 'takeAskSingle',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: 'address', name: 'trader', type: 'address' },
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                internalType: 'bytes32',
                name: 'listingsRoot',
                type: 'bytes32',
              },
              {
                internalType: 'uint256',
                name: 'numberOfListings',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'expirationTime',
                type: 'uint256',
              },
              {
                internalType: 'enum AssetType',
                name: 'assetType',
                type: 'uint8',
              },
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'recipient',
                    type: 'address',
                  },
                  { internalType: 'uint16', name: 'rate', type: 'uint16' },
                ],
                internalType: 'struct FeeRate',
                name: 'makerFee',
                type: 'tuple',
              },
              { internalType: 'uint256', name: 'salt', type: 'uint256' },
            ],
            internalType: 'struct Order',
            name: 'order',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256', name: 'index', type: 'uint256' },
              { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
              {
                components: [
                  { internalType: 'uint256', name: 'index', type: 'uint256' },
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                  { internalType: 'uint256', name: 'price', type: 'uint256' },
                ],
                internalType: 'struct Listing',
                name: 'listing',
                type: 'tuple',
              },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                ],
                internalType: 'struct Taker',
                name: 'taker',
                type: 'tuple',
              },
            ],
            internalType: 'struct Exchange',
            name: 'exchange',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint16', name: 'rate', type: 'uint16' },
            ],
            internalType: 'struct FeeRate',
            name: 'takerFee',
            type: 'tuple',
          },
          { internalType: 'bytes', name: 'signature', type: 'bytes' },
          { internalType: 'address', name: 'tokenRecipient', type: 'address' },
        ],
        internalType: 'struct TakeAskSingle',
        name: 'inputs',
        type: 'tuple',
      },
      { internalType: 'bytes', name: 'oracleSignature', type: 'bytes' },
      { internalType: 'uint256', name: 'amountToWithdraw', type: 'uint256' },
    ],
    name: 'takeAskSinglePool',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: 'address', name: 'trader', type: 'address' },
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                internalType: 'bytes32',
                name: 'listingsRoot',
                type: 'bytes32',
              },
              {
                internalType: 'uint256',
                name: 'numberOfListings',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'expirationTime',
                type: 'uint256',
              },
              {
                internalType: 'enum AssetType',
                name: 'assetType',
                type: 'uint8',
              },
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'recipient',
                    type: 'address',
                  },
                  { internalType: 'uint16', name: 'rate', type: 'uint16' },
                ],
                internalType: 'struct FeeRate',
                name: 'makerFee',
                type: 'tuple',
              },
              { internalType: 'uint256', name: 'salt', type: 'uint256' },
            ],
            internalType: 'struct Order[]',
            name: 'orders',
            type: 'tuple[]',
          },
          {
            components: [
              { internalType: 'uint256', name: 'index', type: 'uint256' },
              { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
              {
                components: [
                  { internalType: 'uint256', name: 'index', type: 'uint256' },
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                  { internalType: 'uint256', name: 'price', type: 'uint256' },
                ],
                internalType: 'struct Listing',
                name: 'listing',
                type: 'tuple',
              },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                ],
                internalType: 'struct Taker',
                name: 'taker',
                type: 'tuple',
              },
            ],
            internalType: 'struct Exchange[]',
            name: 'exchanges',
            type: 'tuple[]',
          },
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint16', name: 'rate', type: 'uint16' },
            ],
            internalType: 'struct FeeRate',
            name: 'takerFee',
            type: 'tuple',
          },
          { internalType: 'bytes', name: 'signatures', type: 'bytes' },
        ],
        internalType: 'struct TakeBid',
        name: 'inputs',
        type: 'tuple',
      },
      { internalType: 'bytes', name: 'oracleSignature', type: 'bytes' },
    ],
    name: 'takeBid',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: 'address', name: 'trader', type: 'address' },
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                internalType: 'bytes32',
                name: 'listingsRoot',
                type: 'bytes32',
              },
              {
                internalType: 'uint256',
                name: 'numberOfListings',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'expirationTime',
                type: 'uint256',
              },
              {
                internalType: 'enum AssetType',
                name: 'assetType',
                type: 'uint8',
              },
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'recipient',
                    type: 'address',
                  },
                  { internalType: 'uint16', name: 'rate', type: 'uint16' },
                ],
                internalType: 'struct FeeRate',
                name: 'makerFee',
                type: 'tuple',
              },
              { internalType: 'uint256', name: 'salt', type: 'uint256' },
            ],
            internalType: 'struct Order',
            name: 'order',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256', name: 'index', type: 'uint256' },
              { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
              {
                components: [
                  { internalType: 'uint256', name: 'index', type: 'uint256' },
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                  { internalType: 'uint256', name: 'price', type: 'uint256' },
                ],
                internalType: 'struct Listing',
                name: 'listing',
                type: 'tuple',
              },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                ],
                internalType: 'struct Taker',
                name: 'taker',
                type: 'tuple',
              },
            ],
            internalType: 'struct Exchange',
            name: 'exchange',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint16', name: 'rate', type: 'uint16' },
            ],
            internalType: 'struct FeeRate',
            name: 'takerFee',
            type: 'tuple',
          },
          { internalType: 'bytes', name: 'signature', type: 'bytes' },
        ],
        internalType: 'struct TakeBidSingle',
        name: 'inputs',
        type: 'tuple',
      },
      { internalType: 'bytes', name: 'oracleSignature', type: 'bytes' },
    ],
    name: 'takeBidSingle',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'newImplementation', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'newImplementation', type: 'address' },
      { internalType: 'bytes', name: 'data', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'verifyDomain',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  { stateMutability: 'payable', type: 'receive' },
];
