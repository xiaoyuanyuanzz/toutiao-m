import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.less'
import router from '@/router/index'

const app = createApp(App)
app.use(router).mount('#app')