<template>
  <div
    v-if="account && transactions.length > 0"
    id="transactions"
    class="p-8 mt-4 md:px-12 w-full max-w-7xl"
  >
    <h2 class="text-gray-200 font-bold text-4xl mb-4">Latest transactions</h2>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(transaction, index) in lastThreeTransactions"
        :key="index"
        class="glass text-gray-300 bg-opacity-50 bg-clip-padding shadow-xl rounded-md mt-4"
      >
        <div class="p-2 rounded-md">
          <img
            :src="require('@/assets/img/ether-image.jpg')"
            alt=""
            class="opacity-50 rounded-md"
          />
        </div>
        <div class="pt-8 pb-2 p-6 relative">
          <h2 class="text-gray-200 font-bold text-2xl mb-2">{{ transaction.amount }} ETH</h2>
          <p class="text-gray-400">
            <span class="text-gray-300 font-medium">From:</span>
            {{ formatAddress(transaction.addressFrom) }}
          </p>
          <p class="text-gray-400">
            <span class="text-gray-300 font-medium">To:</span>
            {{ formatAddress(transaction.addressTo) }}
          </p>
          <p class="text-blueLight font-medium absolute top-0 right-0 m-2 text-xs">
            {{ transaction.timestamp.toLocaleString() }}
          </p>
          <p class="text-blueLight mt-5 mb-2 trucate">{{ transaction.message }}</p>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    id="transactions"
    class="p-8 mt-4 md:mt-0 md:px-12 w-full max-w-7xl text-center py-24"
  >
    <h2 class="text-gray-200 font-bold text-4xl mb-4">
      Connect your Metamask wallet to see last transactions
    </h2>
    <Button @click="connectWallet">Connect wallet</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useTransactionsStore } from '@/stores/transactions';
import Button from '@/components/Button.vue';

export default defineComponent({
  components: {
    Button,
  },
  setup() {
    const transactionsStore = useTransactionsStore();
    const { transactions, account } = storeToRefs(transactionsStore);
    const { getAllTransactions, connectWallet } = useTransactionsStore();

    onMounted(() => {
      getAllTransactions();
    });

    const lastThreeTransactions = computed(() => {
      return transactions.value.slice().reverse().slice(0, 3);
    });

    const formatAddress = (string = '') =>
      `${string.slice(0, 5)}...${string.slice(string.length - 5)}`;

    return {
      transactions,
      account,
      connectWallet,
      lastThreeTransactions,
      formatAddress,
    };
  },
});
</script>
