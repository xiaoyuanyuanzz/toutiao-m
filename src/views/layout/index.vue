<template>
	<div class="layout_container">
		<router-view></router-view>
		
		<!-- tab bar导航栏 -->
		<van-tabbar v-model="active">
		  <van-tabbar-item icon="home-o"  replace to="/layout/home">首页</van-tabbar-item>
		  <van-tabbar-item icon="search"  replace to="/layout/qa">问答</van-tabbar-item>
		  <van-tabbar-item icon="friends-o"  replace to="/layout/video">视频</van-tabbar-item>
		  <van-tabbar-item icon="setting-o"  replace to="/layout/my">{{user ? '我的' : '未登录'}}</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
import { ref } from 'vue';
import {useStore} from 'vuex'
import {computed} from 'vue'

export default {
  setup() {
    const active = ref(0);
	const store = useStore()
	const user = computed(()=> store.state.user)
    return { active,
			store,
			user
	 };
  },
};
</script>

<style>
	
</style>