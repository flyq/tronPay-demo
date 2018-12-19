const TronWeb = require('tronweb')

// This provider is optional, you can just use a url for the nodes instead
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.trongrid.io'); // Full node http endpoint
const solidityNode = new HttpProvider('https://api.trongrid.io'); // Solidity node http endpoint
const eventServer = new HttpProvider('https://api.trongrid.io'); // Contract events http endpoint

const privateKey = '';

const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    privateKey
);


async function getBalance() {

    const address = 'TApJWSBd1tPgGnXjQzUTizGcQWvEMoLPBs';

    // The majority of the function calls are asynchronus,
    // meaning that they cannot return the result instantly.
    // These methods therefore return a promise, which you can await.
    const balance = await tronWeb.trx.getBalance(address);
    console.log({balance});

    // You can also bind a `then` and `catch` method.
    tronWeb.trx.getBalance(address).then(balance => {
        console.log({balance});
    }).catch(err => console.error(err));

    // If you'd like to use a similar API to Web3, provide a callback function.
    tronWeb.trx.getBalance(address, (err, balance) => {
        if (err)
            return console.error(err);

        console.log({balance});
    });
}

async function getIndexOfGlobal() {
    const address = 'TQZNX8cvefQEzNqnsAaqCqiZPudEX5eWzG';

    // The majority of the function calls are asynchronus,
    // meaning that they cannot return the result instantly.
    // These methods therefore return a promise, which you can await.
    const balance = await tronWeb.trx.getContract(address);
    console.log({balance});
    /*
    // You can also bind a `then` and `catch` method.
    tronWeb.trx.getBalance(address).then(balance => {
        console.log({balance});
    }).catch(err => console.error(err));

    // If you'd like to use a similar API to Web3, provide a callback function.
    tronWeb.trx.getBalance(address, (err, balance) => {
        if (err)
            return console.error(err);

        console.log({balance});
    });   
    */
}

async function init() {
    tronWeb.transactionBuilder.triggerSmartContract(
        '41a007d96d0a1f61d262c54337064448a9d1e494d6',
        'init(uint256,uint256)',
        30000,
        0,
        [
            { type: 'uint256', value: 1 },
            { type: 'uint256', value: 1 }
        ],
        (err, transaction) => {
            if(err)
                return console.error(err);
        
            console.group('Unsigned trigger smart contract transaction');
                console.log('- Contract Address: 41a007d96d0a1f61d262c54337064448a9d1e494d6');
                console.log('- Transaction:\n' + JSON.stringify(transaction, null, 2), '\n');
            console.groupEnd();
        });
}
getIndexOfGlobal();