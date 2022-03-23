<template>
  <section
    id="market"
    class="max-w-7xl w-full flex flex-col justify-evenly p-8 mt-4 md:mt-0 md:px-12"
  >
    <h2 class="text-gray-200 font-bold text-4xl mb-4">Current market</h2>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(coin, index) in coins"
        :key="index"
        class="glass border-secondary border-t-2 rounded-md mt-4 p-6"
      >
        <div class="flex justify-between mb-8">
          <img :src="coin.iconUrl" :alt="coin.name" class="h-12" />
          <h3 class="text-gray-200 font-medium text-xl">
            {{ parseFloat(coin.price).toFixed(2) }}$
          </h3>
        </div>
        <h2 class="text-gray-300 text-lg font-semibold">
          <span>{{ coin.rank }}. </span>
          {{ coin.name }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import fetchData from '@/composables/useFetch.ts';

export default defineComponent({
  setup() {
    let coins = ref([]);
    const apiOptions = {
      method: 'GET',
      url: `${process.env.VUE_APP_COINS_API_URL}/coins`,
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        tiers: '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0',
      },
      headers: {
        'x-rapidapi-host': process.env.VUE_APP_COINS_API_HOST,
        'x-rapidapi-key': process.env.VUE_APP_API_KEY,
      },
    };
    onMounted(() => {
      fetchData(apiOptions).then((data) => {
        coins.value = data.data.coins.splice(0, 10);
      });
    });
    return {
      coins,
    };
  },
});
</script>
