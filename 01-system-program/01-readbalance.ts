import * as Web3 from '@solana/web3.js';

async function main() {
    const publicKey = new Web3.PublicKey('ECK2L984MtPve37a7Ew6wwsna5ZaAxpRWmmiHANvUcTG');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);
}

main();