import axios from 'axios'
import store from '@/store'

const request = axios.create({
	baseURL:'api'
})


//请求拦截器

request.interceptors.request.use(config=>{
	//请求发起会经过这里
	//config:本次请求的请求配置对象
	const {user} = store.state
	if(user && user.token){
		config.headers.Authorization = `Bearer ${user.token}`
	}
	console.log(config)
	//必须要返回config对象，否则请求出不去
	return config
	
},error=> Promise.reject(error)) 
//如果请求出错了，（还没有发出去），会进入error

//响应拦截器


export default request