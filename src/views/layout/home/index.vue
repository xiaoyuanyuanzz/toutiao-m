<template>
	<div class="home_container">
		<!-- 导航栏 -->
		<van-nav-bar  class="page_nav_bar" style="background-color: #3296fa;" >
			<template #title>
				<van-button class="search_btn" type='default' size='small' icon='search' round >
					<span>搜索</span>
				</van-button>
			</template>
		 </van-nav-bar>
		 
		 <!-- tab栏 -->
		 <van-tabs v-model:active="active" animated swipeable>
		   <van-tab title="标签 1">内容 1</van-tab>
		   <van-tab title="标签 2">内容 2</van-tab>
		   <van-tab title="标签 3">内容 3</van-tab>
		   <van-tab title="标签 4">内容 4</van-tab>
		 </van-tabs>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const value = ref('');
	const active = ref(0);
    return { value,
			 active
		   };
  },
};
</script>

<style scoped lang="less">
	
	.home_container{
		/deep/ .van-nav-bar__title{
			max-width: unset;
		}
		
		.search_btn{
			width: 305px;
			height: 35px;
			background-color: #5babfb;
			border:none;
			font-size: 15px;
			color: #fff;
		}
		/deep/ .van-icon{
			font-size: 21px;
			color: #fff;
		}
	}
	
	/deep/ .van-tab__panel{
		font-size: 30px;
	}
	
</style>