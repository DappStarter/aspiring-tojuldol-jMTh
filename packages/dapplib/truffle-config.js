require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remind mistake heavy problem boil taste'; 
let testAccounts = [
"0x9c4d594d83c47640c86c77a3b075ddedf62623c38ff8cba7ed90959bca79afdf",
"0x57d3e29af79c35bf12cef727c9cbf853363b1992a827d1f38e471dd6f15bf47d",
"0x4174536e961607c0daeac03227e3c6d77f2cba706ab73f27b8cfb01d5527f8ee",
"0x6623be529ff3194d36ee9baecc27b0339ad5aa2672c717e9df69a57935e47a53",
"0xc86cc09c7721a7d551f7b7247262211a5ab26102a4b25f1aa4a421563b888604",
"0xfebd69d0638ca9ee6a707943ee1c94d03a773373e602f8a39c29aabcf77904d6",
"0x30d11b374424eebc9e7b008d8d891c0ac36e6114f5488ca18ff69db4550a77b1",
"0x71db83b8a84c571b031198c1ff730630549a97fa77eb68276dc2db25ce3b55fe",
"0x419d2b3863cbfc218bc9daa01d6973a56fa3bde93fcc88001f6558190230688b",
"0x0142e4885013461b5820fd5d4c92e774d674a396908b609a871a87d8660b1a6c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

