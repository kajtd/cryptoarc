<template>
  <div id="home">
    <Navbar />
    <Welcome />
    <About />
    <LatestTransactions />
    <Coins />
    <News />
    <Footer />
    <Loader v-show="!newsLoaded || !coinsLoaded || !secondPassed" class="fixed">
      <span class="text-2xl text-primary">🔗cryptoarc</span>
    </Loader>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import Loader from '@/components/Loader.vue';
import Welcome from '@/components/Welcome.vue';
import About from '@/components/About.vue';
import Coins from '@/components/Coins.vue';
import LatestTransactions from '@/components/LatestTransactions.vue';
import News from '@/components/News.vue';
import { storeToRefs } from 'pinia';
import { useTransactionsStore } from '@/stores/transactions';

export default defineComponent({
  components: {
    Footer,
    Navbar,
    Welcome,
    About,
    Coins,
    LatestTransactions,
    News,
    Loader,
  },
  setup() {
    const transactionsStore = useTransactionsStore();
    const { newsLoaded, coinsLoaded } = storeToRefs(transactionsStore);
    const secondPassed = ref(false);

    onMounted(() => {
      setTimeout(() => {
        secondPassed.value = true;
      }, 1000);
    });

    return {
      newsLoaded,
      coinsLoaded,
      secondPassed,
    };
  },
});
</script>
