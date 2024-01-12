import { createApp } from 'vue'
///@ts-ignore
import App from './App.vue'
import "./assets/tailwind.css"
import i18n from './i18n'
import router from './router/router'
import "./assets/iransans.css"
///@ts-ignore

createApp(App).use(router).use(i18n).mount('#app')
