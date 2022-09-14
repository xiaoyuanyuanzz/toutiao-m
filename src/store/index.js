
import {createStore} from 'vuex'

import {getItem,setItem} from '@/utils/storage'

const TOKEN_KEY = 'TOKEN_KEY'

export default createStore({
	state:{
		//一个对象，存储当前登录用户信息（token等数据）
		user: getItem(TOKEN_KEY)
	},
	mutations:{
		setUser(state,data){
			state.user = data
			
			//为了防止刷新页面不清空数据，放入本地存储中
			setItem(TOKEN_KEY,state.user)
		}
	},
})