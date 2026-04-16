import { createApp } from 'vue'
import '@/assets/styles/main.scss'
import App from './App.vue'
import { setupPinia } from '@/store/ui.store'

const app = createApp(App)

setupPinia(app)

app.mount('#app')