<template>
  <div class="app">
    <Welcome />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Welcome from '@/components/Welcome.vue';

export default defineComponent({
  components: {
    Welcome,
  },
});
</script>
