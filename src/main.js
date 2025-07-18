import { createApp } from 'vue'
import './style.css'
import Aos from 'aos'
import App from './App.vue'
import router from './router'

Aos.init()

const app = createApp(App)

app.use(router)

app.mount('#app')
