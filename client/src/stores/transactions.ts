import { ref } from 'vue';
import { ethers } from 'ethers';
import { defineStore } from 'pinia';
import { contractABI, contractAddress } from '../utils/constants';
import Transaction from '@/types/Transaction';
import ContractTransaction from '@/types/ContractTransaction';

export const useTransactionsStore = defineStore('user', () => {
  const account = ref(null);
  const loading = ref(false);
  const transactions = ref<Transaction[]>([]);
  const transactionCount = ref(0);
  const accountBalance = ref(0);
  const accountAddress = ref('');
  const ethereum = window['ethereum'];

  const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionsContract;
  };

  async function sendTransaction(formData: Transaction) {
    try {
      if (ethereum) {
        const { addressTo, amount, message } = formData;
        const transactionsContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(String(amount));

        await ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: account.value,
              to: addressTo,
              gas: '0x5208',
              value: parsedAmount._hex,
            },
          ],
        });

        const transactionHash = await transactionsContract.addToBlockchain(
          addressTo,
          parsedAmount,
          message
        );

        loading.value = true;
        await transactionHash.wait();

        loading.value = false;
        transactionCount.value++;

        window.location.reload();
      }
    } catch (e) {
      console.log('error: ', e);
    }
  }

  async function connectWallet() {
    try {
      if (!ethereum) {
        console.log('You have to connect to MetaMask first');
        return;
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      account.value = accounts[0];
      await getAllTransactions();
    } catch (error) {
      console.log(error);
    }
  }

  async function checkIfWalletIsConnected() {
    try {
      if (!ethereum) {
        console.log('You have to connect to MetaMask first');
        return;
      }
      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        account.value = accounts[0];
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map(
          (transaction: ContractTransaction) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(transaction.timestamp * 1000),
            message: transaction.message,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
          })
        );

        const transactionsNumber = await transactionsContract.getTransactionCount();
        transactionCount.value = transactionsNumber.toNumber();
        transactions.value = structuredTransactions;

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        accountBalance.value = Number(await provider.getBalance(signer.getAddress())) / 10 ** 18;
        signer.getAddress().then((address) => {
          accountAddress.value = address;
        });
      }
    } catch (error) {
      console.log('Metamask is not detected.');
    }
  };

  return {
    account,
    connectWallet,
    checkIfWalletIsConnected,
    sendTransaction,
    transactions,
    transactionCount,
    loading,
    getAllTransactions,
    accountBalance,
    accountAddress,
  };
});
