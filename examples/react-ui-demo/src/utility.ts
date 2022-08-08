import { TransactionWalletOperation } from "@taquito/taquito";

export const processOperationSucceed = (op: TransactionWalletOperation) => {
  console.log(`Hash: ${op.opHash}`);
  op.confirmation()
    .then((result) => {
      console.log(result);
      if (result.completed) {
        console.log('Transaction correctly processed!');
      } else {
        console.log('An error has occurred');
      }
    })
    .catch((err) => console.log(err));
};

export const processOperationError = (err: TransactionWalletOperation) => console.log(err);
