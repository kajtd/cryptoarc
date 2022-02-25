<template>
  <div class="app">
    <Navbar />
    <Welcome />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import Welcome from '@/components/Welcome.vue';

export default defineComponent({
  components: {
    Footer,
    Navbar,
    Welcome,
  },
});
</script>
