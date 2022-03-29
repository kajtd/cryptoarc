<template>
  <button
    @click="connectWallet"
    class="bg-primary text-gray-300 mt-2 py-4 w-44 rounded-md shadow-2xl"
  >
    {{ account ? 'Connected ✔️' : 'Connect wallet' }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useTransactionsStore } from '@/stores/transactions';

export default defineComponent({
  setup() {
    const transactionsStore = useTransactionsStore();
    const { account, transactionCount, loading } = storeToRefs(transactionsStore);
    const { connectWallet } = useTransactionsStore();
    return {
      account,
      connectWallet,
    };
  },
});
</script>
