import { SeaportTransaction } from './marketplaces/opensea/seaport-transaction';
import { Block } from './models/block';
import { Marketplace } from './models/marketplace';
import { Sale } from './models/sale';

export class IngestTransaction {
  block: Block;
  seaportTransaction: SeaportTransaction;

  constructor(block: Block) {
    this.block = block;
    this.seaportTransaction = new SeaportTransaction(this.block);
  }

  ingestTransactions() {
    const transactions = this.block.transactions;

    const sales: Sale[] = [];

    for (const transaction of transactions) {
      // When transaction status is 0, that means the transaction was cancelled on the blockchain
      if (transaction && transaction.status === 1) {
        switch (transaction.to.address as Marketplace) {
          case Marketplace.SEAPORT:
            sales.push(
              ...this.seaportTransaction.ingestTransaction(transaction)
            );
        }
      }
    }

    return sales;
  }
}
