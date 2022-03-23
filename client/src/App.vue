<template>
  <Navbar />
  <Welcome />
  <About />
  <LatestTransactions />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import Welcome from '@/components/Welcome.vue';
import About from '@/components/About.vue';

import LatestTransactions from '@/components/LatestTransactions.vue';
export default defineComponent({
  components: {
    Footer,
    Navbar,
    Welcome,
    About,
    LatestTransactions,
  },
});
</script>
