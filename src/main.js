import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.less'
import '@/styles/reset.css'
import router from '@/router/index'
import Vant from 'vant'
import vuex from '@/store'
import { ConfigProvider } from 'vant'

/*// 1. 引入你需要的组件
import { Button } from 'vant';*/

// 2. 引入组件样式
import 'vant/lib/index.css';
//动态设置rem基准值
import 'lib-flexible'

const app = createApp(App)
app.use(vuex)
app.use(router)
app.use(Vant)
app.use(ConfigProvider)
app.mount('#app')
