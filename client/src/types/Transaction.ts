interface Transaction {
  addressTo: string;
  addressFrom?: string;
  timestamp?: string;
  message: string;
  amount: number;
}

export default Transaction;
