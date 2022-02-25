<template>
  <div
    class="max-w-7xl w-full min-h-screen flex flex-col md:flex-row md:items-center justify-evenly p-8 mt-4 md:mt-0 md:px-12"
  >
    <div class="flex flex-col gap-6 w-full md:w-2/3">
      <h1 class="font-bold text-5xl">Control your crypto</h1>
      <ul class="text-lg">
        <li class="flex"><MailIcon class="w-5 mr-2 text-green-500" />Send cryptos to everyone.</li>
        <li class="flex"><MapIcon class="w-5 mr-2 text-green-500" />Track your transactions.</li>
        <li class="flex">
          <CalendarIcon class="w-5 mr-2 text-green-500" />Stay up to date with latest crypto news.
        </li>
      </ul>
      <Button>Connect wallet</Button>
    </div>
    <PseudoWallet />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MailIcon, MapIcon, CalendarIcon } from '@heroicons/vue/solid';
import PseudoWallet from '@/components/PseudoWallet.vue';
import Button from '@/components/Button.vue';

export default defineComponent({
  name: 'Home',
  components: {
    MailIcon,
    MapIcon,
    CalendarIcon,
    PseudoWallet,
    Button,
  },
});
</script>
