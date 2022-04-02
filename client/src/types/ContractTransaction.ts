interface ContractTransaction {
  receiver: string;
  sender: string;
  message: string;
  timestamp: number;
  amount: { _hex: string };
}

export default ContractTransaction;
