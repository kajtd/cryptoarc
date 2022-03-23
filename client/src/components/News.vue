<template>
  <section
    id="news"
    class="max-w-7xl w-full flex flex-col justify-evenly p-8 mt-4 md:mt-0 md:px-12 pb-4"
  >
    <h2 class="text-gray-200 font-bold text-4xl mb-4">Latest crypto news</h2>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="(article, index) in news"
        :key="index"
        class="glass text-gray-300 bg-opacity-50 bg-clip-padding shadow-xl rounded-md mt-4 cursor-pointer"
      >
        <a :href="article.url" target="_blank">
          <img
            :src="article.image.thumbnail.contentUrl"
            alt=""
            class="w-full opacity-50 mx-auto h-48 object-cover rounded-t-md"
          />
          <div class="px-4 relative py-2">
            <header class="flex items-center justify-between">
              <p class="text-blueLight text-sm mb-1">{{ article?.category || 'Crypto' }}</p>
              <p class="text-blueLight text-sm mb-1">
                {{ new Date(article.datePublished).toLocaleDateString('en-US') }}
              </p>
            </header>
            <h2 class="text-gray-200 font-bold text-lg h-16 mt-2">
              {{ truncateString(article.name, 44) }}
            </h2>
            <p class="text-gray-400 mt-3">
              {{ truncateString(article.description, 100) }}
            </p>
          </div>
        </a>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import fetchData from '@/composables/useFetch.ts';

export default defineComponent({
  setup() {
    let news = ref([]);
    const apiOptions = {
      method: 'GET',
      url: `${process.env.VUE_APP_NEWS_API_URL}/news/search?q=Cryptocurrency&count=5`,
      params: { safeSearch: 'Off', textFormat: 'Raw' },
      headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': process.env.VUE_APP_NEWS_API_HOST,
        'x-rapidapi-key': process.env.VUE_APP_API_KEY,
      },
    };

    const truncateString = (string = '', maxLength = 30) =>
      string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

    onMounted(() => {
      fetchData(apiOptions).then((data) => {
        news.value = data.value;
      });
    });
    return {
      news,
      truncateString,
    };
  },
});
</script>
