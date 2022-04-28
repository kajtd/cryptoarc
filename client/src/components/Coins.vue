<template>
  <section
    v-if="coins"
    id="market"
    class="max-w-7xl w-full flex flex-col justify-evenly p-8 mt-4 md:mt-0 md:px-12 mx-auto"
  >
    <h2 class="text-gray-200 font-bold text-2xl sm:text-4xl mb-4">Current market</h2>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(coin, index) in coins"
        :key="index"
        class="glass border-primary border-t-2 rounded-md mt-4 p-6"
      >
        <div class="flex justify-between mb-8">
          <img :src="coin.iconUrl" :alt="coin.name" width="48" height="48" class="h-12" />
          <h3 class="text-blueLight font-medium text-xl">
            {{ parseFloat(coin.price).toFixed(2) }}$
          </h3>
        </div>
        <div class="flex justify-between">
          <h4 class="text-gray-300 text-lg font-semibold">
            <span>{{ coin.rank }}. </span>
            {{ coin.name }}
          </h4>
          <LineChart
            :chartData="{
              labels: [
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
              ],
              datasets: [
                {
                  data: coin.sparkline,
                  fill: true,
                  borderColor: '#CCFB02',
                  backgroundColor: 'transparent',
                },
              ],
            }"
            :options="options"
            :width="100"
            :height="50"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import Coin from '@/types/Coin';
import { LineChart } from 'vue-chart-3';
import { Chart, ChartOptions, registerables } from 'chart.js';
import { storeToRefs } from 'pinia';
import { useTransactionsStore } from '@/stores/transactions';

Chart.register(...registerables);

export default defineComponent({
  components: { LineChart },
  setup() {
    const transactionsStore = useTransactionsStore();
    const { coinsLoaded } = storeToRefs(transactionsStore);

    const options = computed<ChartOptions<'line'>>(() => ({
      scales: {
        yAxis: {
          display: false,
        },
        xAxis: {
          display: false,
        },
      },
      animations: {
        tension: {
          duration: 500,
          easing: 'linear',
          from: 0,
          to: 1,
          loop: true,
        },
      },
      elements: {
        point: {
          radius: 0,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    }));

    let coins = ref<Coin[]>();

    onMounted(() => {
      fetch(`./../../.netlify/functions/fetch-data/fetch-data?data=coins`)
        .then((response) => response.json())
        .then((responseJSON) => {
          coins.value = responseJSON.data.coins.splice(0, 10);
        })
        .finally(() => (coinsLoaded.value = true));
    });
    return {
      coins,
      options,
    };
  },
});
</script>
