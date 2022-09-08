import {createRouter,createWebHistory} from 'vue-router'
import Login from '@/views/login'

//路由表
const routes = [
	{
		path:'/',
		redirect:'/login'
	},
	{
		path:'/login',
		component:Login
	},
	]
const router = createRouter({
	history:createWebHistory(),
	routes
})

export default router
