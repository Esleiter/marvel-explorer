import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')
