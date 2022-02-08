import "@/assets/css/reset.css"
import "@/assets/css/column.scss"
import "@/assets/css/main.scss";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
