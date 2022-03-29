<template>
  <section
    class="max-w-7xl w-full flex flex-col md:flex-row md:items-center justify-evenly p-8 mt-4 md:mt-0"
  >
    <div class="flex flex-col gap-6 max-w-md mt-12 md:mt-0">
      <CoinAnimation />
      <h1 class="font-bold text-3xl md:text-5xl">Best way to handle your crypto</h1>
      <ul class="text-lg">
        <li class="flex">Send cryptos to everyone.</li>
        <li class="flex">Track your transactions.</li>
        <li class="flex">Stay up to date with latest crypto news.</li>
      </ul>
      <ConnectButton>Connect wallet</ConnectButton>
    </div>
    <div class="glass flex flex-col justify-center pt-24 max-w-sm rounded-3xl p-4 mt-12 md:mt-0">
      <h4 class="text-center text-sm font-medium">Current Wallet Balance</h4>
      <h2 class="text-gray-200 font-bold text-center text-4xl my-3">{{ 0.47218 }} ETH</h2>
      <select
        name="network"
        id="network"
        class="my-2 w-1/2 self-center rounded-md p-3 outline-none bg-gray-900 focus:bg-gray-900 bg-opacity-60 text-gray-400 border-none text-sm"
      >
        <option value="Rinkeby" selected>Rinkeby</option>
        <option value="Mainnet">Mainnet</option>
        <option value="Ropsten">Ropsten</option>
      </select>
      <form
        @submit.prevent="submitForm(formData)"
        action=""
        class="bg-gray-800 bg-opacity-50 bg-clip-padding shadow-xl p-4 rounded-xl mt-4 relative"
      >
        <Loader v-if="loading" />
        <input
          v-model="formData.addressTo"
          placeholder="Address To"
          name="addressTo"
          required
          type="text"
          class="my-2 w-full rounded-md p-3 outline-none bg-gray-900 bg-opacity-60 text-gray-400 border-none text-sm"
        />
        <span v-show="addressError" class="text-xs text-red-400">
          You need to write correct ethereum address
        </span>
        <input
          v-model="formData.amount"
          placeholder="Amount"
          name="amount"
          required
          step="0.001"
          type="number"
          class="my-2 w-full rounded-md p-3 outline-none bg-gray-900 bg-opacity-60 text-gray-400 border-none text-sm"
        />
        <span v-show="amountError" class="text-xs text-red-400">
          You need to specify positive amount of Ether
        </span>
        <textarea
          v-model="formData.message"
          placeholder="Message"
          name="message"
          type="text"
          class="my-2 w-full rounded-md p-3 outline-none bg-gray-900 bg-opacity-60 text-gray-400 border-none text-sm"
        />
        <input
          type="submit"
          value="Send"
          class="bg-primary w-full mt-2 py-4 rounded-md shadow-2xl shadow-primary cursor-pointer"
        />
        <span v-show="accountError" class="text-xs text-red-400">
          You need to connect to the Metamask
        </span>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { useTransactionsStore } from '@/stores/transactions';
import ConnectButton from '@/components/ConnectButton.vue';
import Loader from '@/components/Loader.vue';
import CoinAnimation from '@/components/CoinAnimation.vue';
import StructuredTransaction from '@/types/StructuredTransaction';

export default defineComponent({
  components: {
    ConnectButton,
    Loader,
    CoinAnimation,
  },
  setup() {
    const transactionsStore = useTransactionsStore();
    const { account, transactionCount, loading } = storeToRefs(transactionsStore);
    const { checkIfWalletIsConnected, sendTransaction, getAllTransactions } =
      useTransactionsStore();

    const formData = reactive<StructuredTransaction>({
      addressTo: '',
      amount: 0,
      message: '',
    });

    const amountError = ref(false);
    const addressError = ref(false);
    const accountError = ref(false);

    watchEffect(async (transactionCount) => {
      checkIfWalletIsConnected();
    });

    const validateForm = () => {
      const walletRegex = '^0x[a-fA-F0-9]{40}$';
      addressError.value = formData.addressTo === '' || !formData.addressTo.match(walletRegex);
      amountError.value = formData.amount <= 0;
      accountError.value = !account.value;
    };

    const submitForm = (formData) => {
      validateForm();
      if (!addressError.value && !amountError.value && !accountError.value)
        sendTransaction(formData);
    };

    return {
      account,
      loading,
      submitForm,
      formData,
      transactionCount,
      addressError,
      amountError,
      accountError,
    };
  },
});
</script>
