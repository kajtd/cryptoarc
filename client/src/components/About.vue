<template>
  <section
    v-if="account"
    id="about"
    class="max-w-7xl w-full mx-auto p-8 mt-12 md:my-20 md:px-12 md:w-3/4"
  >
    <h2 class="font-bold text-3xl md:text-7xl">Check the statistics</h2>
    <p class="text-gray-500 text-lg sm:text-xl my-6">
      This platform allows you to send ETH to everyone. See how many transactions have been made so
      far!
    </p>
    <ul
      class="text-lg text-gray-500 flex flex-col md:flex-row md:items-center justify-between gap-y-4"
    >
      <li class="w-36 h-36">
        <p class="text-6xl text-secondary font-semibold mb-1">
          {{ transactionCount <= 100 ? transactionCount : '100+' }}
        </p>
        <p>Transactions made.</p>
      </li>
      <li v-if="transactions.length > 0" class="w-36 h-36">
        <p class="text-6xl text-secondary font-semibold mb-1">
          {{
            Math.min(
              Math.ceil(
                Math.abs(Date.now() - transactions[transactions.length - 1].timestamp) / (1000 * 60)
              ),
              100
            )
          }}+
        </p>
        <p>Minutes from last</p>
      </li>
      <li v-if="transactions.length > 0" class="w-36 h-36">
        <p class="text-6xl text-secondary font-semibold mb-1">
          {{
            Math.min(
              Math.max.apply(
                Math,
                transactions.map((t) => t.amount)
              ),
              100
            )
          }}
        </p>
        <p>Largest amount of ETH sent.</p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useTransactionsStore } from '@/stores/transactions';

export default defineComponent({
  setup() {
    const transactionsStore = useTransactionsStore();
    const { account, transactionCount, transactions } = storeToRefs(transactionsStore);

    return {
      account,
      transactions,
      transactionCount,
    };
  },
});
</script>
