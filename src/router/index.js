import {createRouter,createWebHistory} from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Home from '@/views/layout/home'
import Qa from '@/views/layout/qa'
import My from '@/views/layout/my'
import Video from '@/views/layout/video'

//路由表
const routes = [
	{
		path:'/',
		redirect:'/layout'
	},
	{
		path:'/login',
		component:Login
	},
	{
		path:'/layout',
		component:Layout,
		children:[{
			path:'/layout/home',
			component:Home
		},
		{
			path:'/layout/qa',
			component:Qa
		},{
			path:'/layout/video',
			component:Video
		},{
			path:'/layout/my',
			component:My
		}],
		redirect:'/layout/home'
	}
	]
const router = createRouter({
	history:createWebHistory(),
	routes
})

export default router
