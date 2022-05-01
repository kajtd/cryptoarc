<template>
  <footer>
    <div class="max-w-7xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
      <nav>
        <ul class="flex flex-wrap justify-center -mx-5 -my-2">
          <li v-for="(link, index) in links" :key="index">
            <a
              v-show="!link.disabled || account"
              :href="link.href"
              class="text-base leading-6 transition-colors text-gray-500 hover:text-primary px-5"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </nav>
      <p class="mt-8 text-base leading-6 text-center text-gray-400">
        <a href="/"> cryptoarc </a>
        All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Link from '@/types/Link';
import { storeToRefs } from 'pinia';
import { useTransactionsStore } from '@/stores/transactions';

export default defineComponent({
  setup() {
    const transactionsStore = useTransactionsStore();
    const { account } = storeToRefs(transactionsStore);

    const links = ref<Link[]>([
      {
        href: '#home',
        name: 'Home',
        disabled: false,
      },
      {
        href: '#about',
        name: 'About',
        disabled: true,
      },
      {
        href: '#transactions',
        name: 'Transactions',
        disabled: true,
      },
      {
        href: '#market',
        name: 'Market',
        disabled: false,
      },
      {
        href: '#news',
        name: 'News',
        disabled: false,
      },
    ]);

    return { links, account };
  },
});
</script>
