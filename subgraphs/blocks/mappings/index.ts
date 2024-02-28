/* eslint-disable prefer-const */
import { BigInt, ethereum } from "@graphprotocol/graph-ts";
import { Block } from "../generated/schema";
import { ZERO_BI } from "../../exchange-v2/mappings/utils";
import { batchTransfer } from "../generated/BSCValidatorSet/BSCValidatorSet";

let BI_30 = BigInt.fromI32(30);
// let BI_60 = BigInt.fromI32(60);

export function handleBlock(block: ethereum.Block): void {
  if (block.number.mod(BI_30).notEqual(ZERO_BI)) {
    return;
  }
  let entity = new Block(block.hash.toHex());
  entity.parentHash = block.parentHash;
  entity.unclesHash = block.unclesHash;
  entity.author = block.author;
  entity.stateRoot = block.stateRoot;
  entity.transactionsRoot = block.transactionsRoot;
  entity.receiptsRoot = block.receiptsRoot;
  entity.number = block.number;
  entity.gasUsed = block.gasUsed;
  entity.gasLimit = block.gasLimit;
  entity.timestamp = block.timestamp;
  entity.difficulty = block.difficulty;
  entity.totalDifficulty = block.totalDifficulty;
  entity.size = block.size;
  entity.save();
}

export function handleEmpty(event: batchTransfer): void {
  //
}
