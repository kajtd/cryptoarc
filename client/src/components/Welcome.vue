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
      <Button @click="connectWallet">Connect wallet</Button>
    </div>
    <div class="glass flex flex-col justify-center pt-24 max-w-sm rounded-3xl p-4 mt-12 md:mt-0">
      <h4 class="text-center text-sm font-medium">Current Wallet Balance</h4>
      <h2 class="text-gray-200 font-bold text-center text-4xl my-3">0.0952 ETH</h2>
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
        @submit.prevent="sendTransaction(formData)"
        action=""
        class="bg-gray-800 bg-opacity-50 bg-clip-padding shadow-xl p-4 rounded-xl mt-4"
      >
        <input
          v-model="formData.addressTo"
          placeholder="Address To"
          name="addressTo"
          type="text"
          class="my-2 w-full rounded-md p-3 outline-none bg-gray-900 bg-opacity-60 text-gray-400 border-none text-sm"
        />
        <input
          v-model="formData.amount"
          placeholder="Amount"
          name="amount"
          step="0.001"
          type="number"
          class="my-2 w-full rounded-md p-3 outline-none bg-gray-900 bg-opacity-60 text-gray-400 border-none text-sm"
        />
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
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { useTransactionsStore } from '@/stores/transactions';
import Button from '@/components/Button.vue';
import CoinAnimation from '@/components/CoinAnimation.vue';
import Transaction from '@/types/Transaction';

export default defineComponent({
  components: {
    Button,
    CoinAnimation,
  },
  setup() {
    const transactionsStore = useTransactionsStore();
    const { account, transactionCount } = storeToRefs(transactionsStore);
    const { connectWallet, checkIfWalletIsConnected, sendTransaction, checkIfTransactionsExists } =
      useTransactionsStore();

    const formData = ref<Transaction>({
      addressTo: '',
      amount: 0,
      message: '',
    });

    watchEffect(async (transactionCount) => {
      checkIfWalletIsConnected();
    });

    return {
      transactionsStore,
      account,
      connectWallet,
      sendTransaction,
      formData,
      transactionCount,
    };
  },
});
</script>