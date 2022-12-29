require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy riot sad unable hunt kitten obscure genuine'; 
let testAccounts = [
"0xec69c72646fca20795353aa029861d2e2cef42f83222109f7776248989b91b75",
"0x510f5c2c58f37c6186adecd1954eb584b1569d7fa1d2ea3055aca6376a40f130",
"0xafd7b439bb1d84b25f154c14f4c0ef65a2e6071e4eef9c2bdaeb4d38a48598a3",
"0xd16a7e5355556ab776e75bac49bfd75fadf67b3c4cec34c4d964fd9ab02a0c1f",
"0x7bc58f65f0b1178848f939a8826b404b0e791fd2ee388b39b7e205b23dfd446d",
"0xf4916ba29c8137c0b88624b6aa97536e55896bf0d12de1246198bc7645661988",
"0x3116ecae7aee00245cefb84fa232a65e2e05e555f18d64bde98c628b5e0563f0",
"0x0c6500887e9f07cdac655840bfee5bdff565cc1a9905cc6e3570f5dc8ea4043e",
"0xa4e562ac9dbd874cecb88e3885bc3de6f53008c28fa72afa08af41a9197401b4",
"0x5a509482186527234042ca1894c5971cd63d250f65fda64a7be154107075a65b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

