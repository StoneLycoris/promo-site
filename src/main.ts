import { createApp } from 'vue'
import '@/assets/styles/main.scss'
import App from './App.vue'
import { setupPinia } from '@/store/ui.store'
import { useTheme } from '@/composables/useTheme'

const app = createApp(App)

setupPinia(app)

const { initTheme } = useTheme()
initTheme()

app.mount('#app')