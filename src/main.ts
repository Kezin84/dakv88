import './assets/main.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { inject } from '@vercel/analytics';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Inject Vercel Analytics
inject();
