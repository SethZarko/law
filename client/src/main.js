import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { scrollMixin } from './mixins/scrollMixin.js';

import router from './router'

createApp(App)
    .use(router)
    .mixin(scrollMixin)
    .mount('#app')
