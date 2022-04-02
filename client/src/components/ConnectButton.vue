<template>
  <button @click="connectWallet" class="btn-main w-44">
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
    const { account } = storeToRefs(transactionsStore);
    const { connectWallet } = useTransactionsStore();
    return {
      account,
      connectWallet,
    };
  },
});
</script>
