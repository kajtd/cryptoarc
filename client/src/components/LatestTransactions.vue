<template>
  <section
    v-if="account && transactions.length > 0"
    id="transactions"
    class="p-8 mt-4 md:px-12 w-full max-w-7xl mx-auto"
  >
    <h2 class="text-gray-200 font-bold text-2xl sm:text-4xl mb-4">Latest transactions</h2>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(transaction, index) in lastThreeTransactions"
        :key="index"
        class="glass text-gray-300 bg-opacity-50 bg-clip-padding shadow-xl rounded-md mt-4 border-secondary border-t-2 p-4 flex flex-col relative justify-between"
      >
        <div>
          <h3 class="text-blueLight font-bold text-5xl mt-2 mb-4">{{ transaction.amount }} ETH</h3>
          <p class="text-gray-400">
            <span class="text-gray-300 font-medium">From:</span>
            {{ formatAddress(transaction.addressFrom) }}
          </p>
          <p class="text-gray-400">
            <span class="text-gray-300 font-medium">To:</span>
            {{ formatAddress(transaction.addressTo) }}
          </p>
          <p
            v-if="transaction.timestamp"
            class="text-gray-400 font-medium absolute top-0 right-0 m-2 text-xs"
          >
            {{ transaction.timestamp.toLocaleString() }}
          </p>
        </div>
        <p class="text-blueLight mt-2">
          {{ transaction.message }}
        </p>
      </div>
    </div>
  </section>
  <section
    v-else
    id="transactions"
    class="p-8 mt-4 md:mt-0 md:px-12 w-full max-w-7xl text-center py-24 mx-auto"
  >
    <h4 class="text-gray-200 font-bold text-4xl mb-4">
      Connect your Metamask wallet to see last transactions
    </h4>
    <ConnectButton>Connect wallet</ConnectButton>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useTransactionsStore } from '@/stores/transactions';
import ConnectButton from '@/components/ConnectButton.vue';
import Transaction from '@/types/Transaction';
import { formatAddress } from '@/utils/methods';

export default defineComponent({
  components: {
    ConnectButton,
  },
  setup() {
    const transactionsStore = useTransactionsStore();
    const { transactions, account } = storeToRefs(transactionsStore);
    const { getAllTransactions } = useTransactionsStore();

    onMounted(() => {
      getAllTransactions();
    });

    const lastThreeTransactions = computed<Transaction[]>(() => {
      return transactions.value.slice().reverse().slice(0, 3);
    });

    return {
      transactions,
      account,
      lastThreeTransactions,
      formatAddress,
    };
  },
});
</script>
