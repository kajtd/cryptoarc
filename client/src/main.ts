import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import '@/assets/index.css';
import { createPinia } from 'pinia';

createApp(App).use(createPinia()).mount('#app');
