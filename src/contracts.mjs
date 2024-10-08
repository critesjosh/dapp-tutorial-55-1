// src/contracts.mjs
import { AztecAddress, Contract, loadContractArtifact } from '@aztec/aztec.js';
import { readFileSync } from "fs";
import TokenContractJson from "../contracts/token/target/token-Token.json" assert { type: "json" };

export async function getToken(client) {
    const addresses = JSON.parse(readFileSync('addresses.json'));
    return Contract.at(AztecAddress.fromString(addresses.token), loadContractArtifact(TokenContractJson), client);
}