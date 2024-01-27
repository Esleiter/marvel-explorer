import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.sass'

import App from './App.vue'
import router from './router'

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')
