<template>
  <div class="app">
    <Navbar />
    <Welcome />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Welcome from '@/components/Welcome.vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  components: {
    Welcome,
    Navbar,
  },
});
</script>
