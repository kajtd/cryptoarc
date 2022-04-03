<template>
  <section
    v-if="account"
    id="about"
    class="max-w-7xl w-full mx-auto p-8 mt-12 md:my-20 md:px-12 md:w-3/4"
  >
    <h1 class="font-bold text-4xl md:text-7xl">Check the numbers</h1>
    <p class="text-gray-500 text-lg sm:text-xl my-6">
      This platform reaches people all over the world. See how many users have trusted us over the
      years!
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
                Math.abs(new Date() - transactions[transactions.length - 1].timestamp) / (1000 * 60)
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
                transactions.map(function (t) {
                  return t.amount;
                })
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
