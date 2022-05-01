<template>
  <header class="w-full flex justify-center z-50">
    <div
      class="flex items-center h-full flex-row-reverse laptop:flex-row justify-center laptop:justify-between w-full p-8 max-w-7xl"
    >
      <div class="flex items-center flex-1 justify-end laptop:hidden">
        <div>
          <input
            id="menu-toggle"
            v-model="mobileNav"
            class="menu-toggle"
            type="checkbox"
            @click="toggleMobileNav"
          />
          <label class="menu-btn" for="menu-toggle"><span /></label>
        </div>
      </div>
      <div class="laptop:flex-1 laptop:justify-start">
        <a href="/" class="flex items-center">
          <span class="text-2xl text-primary">🔗cryptoarc</span>
        </a>
      </div>
      <nav class="h-full hidden laptop:flex items-center">
        <ul class="flex items-center">
          <li v-for="link in links" :key="link.name">
            <a
              v-show="!link.disabled || account"
              :href="link.href"
              class="text-gray-300 text-sm font-semibold transition duration-300 cursor-pointer hover:text-primary p-4"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
        <ConnectButton class="text-sm ml-12"> Connect wallet </ConnectButton>
      </nav>
    </div>
    <transition name="mobile-nav">
      <nav
        v-show="mobileNav"
        class="laptop:hidden flex flex-col justify-center h-full fixed top-0 left-0 p-8 w-full mobile-nav z-10 bg-mainBg"
      >
        <ul class="mb-2">
          <li v-for="link in links" :key="link.name">
            <a
              v-show="!link.disabled || account"
              @click="toggleMobileNav"
              class="text-gray-300 text-xl font-semibold transition duration-300 cursor-pointer hover:text-primary inline-block py-2"
              :href="link.href"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
        <ConnectButton> Connect wallet </ConnectButton>
      </nav>
    </transition>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ConnectButton from '@/components/ConnectButton.vue';
import Link from '@/types/Link';
import { storeToRefs } from 'pinia';
import { useTransactionsStore } from '@/stores/transactions';

export default defineComponent({
  components: {
    ConnectButton,
  },
  setup() {
    const transactionsStore = useTransactionsStore();
    const { account } = storeToRefs(transactionsStore);

    const mobileNav = ref<boolean>(false);
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

    function toggleMobileNav(): void {
      mobileNav.value = !mobileNav.value;
      document.body.classList.toggle('modal');
    }

    return { mobileNav, links, toggleMobileNav, account };
  },
});
</script>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.2s ease-in-out;
}
.mobile-nav-enter-from {
  transform: translateX(100%);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.mobile-nav-leave-to {
  transform: translateX(100%);
}
.menu-toggle {
  opacity: 0;
}
.menu-toggle:checked ~ .menu-btn > span {
  @apply w-full transform rotate-45;
}
.menu-toggle:checked ~ .menu-btn > span::before {
  @apply top-0 transform rotate-0;
}
.menu-toggle:checked ~ .menu-btn > span::after {
  @apply top-0 w-full transform rotate-90;
}
.menu-btn {
  @apply block relative w-5 h-5 cursor-pointer z-40;
}
.menu-btn > span,
.menu-btn > span::before,
.menu-btn > span::after {
  @apply block w-full h-1  absolute  bg-gray-300 transition-transform duration-300;
}
.menu-btn > span::before {
  content: '';
  top: -6px;
  width: 80%;
}
.menu-btn > span::after {
  content: '';
  top: 6px;
  width: 50%;
}
</style>
