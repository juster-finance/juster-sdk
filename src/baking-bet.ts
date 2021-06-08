export class BakingBet {
  private __network: "mainnet" | "testnet";

  constructor(network: "mainnet" | "testnet") {
    this.__network = network;
    console.log("BakingBet creation")
  }
}

