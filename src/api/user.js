import request from '@/utils/request'
import store from '@/store'

export const login = data => request({
	method:'POST',
	url:'v1_0/authorizations',
	data
})


export const sendCode = mobile => request({
	method:'GET',
	url:`v1_0/sms/codes/${mobile}`
})

//获取用户信息的接口
export const getUserInfo = () => request({
	method:'GET',
	url:`v1_0/user`,
	//该接口需要授权才能访问
	headers:{
		Authorization:`Bearer ${store.state.user.token}`
	}
})


//获取频道列表的接口
export const getChannels = () => request({
	method:'GET',
	url:`v1_0/channels`,
	//该接口需要授权才能访问
	headers:{
		Authorization:`Bearer ${store.state.user.token}`
	}
})