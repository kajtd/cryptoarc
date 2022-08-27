interface Transaction {
  addressTo: string;
  addressFrom?: string;
  timestamp: number;
  message: string;
  amount: number;
}

export default Transaction;
