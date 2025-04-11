import './assets/tailwind.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')

AOS.init({
  duration: 300, // Animation duration in milliseconds
  easing: 'ease-in-out', // Easing function
})
