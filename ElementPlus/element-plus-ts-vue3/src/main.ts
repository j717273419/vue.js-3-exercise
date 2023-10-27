import './assets/main.css'
import ElemePlus from 'element-plus'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(ElemePlus)
app.mount('#app')
