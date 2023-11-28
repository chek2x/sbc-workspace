import {
    Keypair,
    Connection,
    Commitment,
    clusterApiUrl,
} from "@solana/web3.js";
import bs58 from "bs58"
import "dotenv/config"
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import { PublicKey } from "@metaplex-foundation/js";

const start = async () => {
    const COMMITMENT: Commitment = "finalized"
    const CONNECTION = new Connection(clusterApiUrl("devnet"), COMMITMENT)
    const PAYER = Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY ?? ""))
    const temp = await getOrCreateAssociatedTokenAccount(CONNECTION, PAYER, new PublicKey("Av8HRJ5PeNemWS1ePB8i7okmVoxRtYyqU1oNvmdUYBL3"), PAYER.publicKey)
    console.log(temp.address.toString());
}

start();