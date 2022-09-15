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
		   <van-tab title="标签 5">内容 5</van-tab>
		   <van-tab title="标签 6">内容 6</van-tab>
<!-- 		   <template #nav-right>
			   <div class="place_holder"></div>
		   </template> -->
		   <template #nav-right>
			   <div class="place_holder">
			   </div>
			   
			   <div class="hamburger_btn">
				   <i class="toutioa toutiao-gengduo"></i>
			   </div>
		   </template>
		 </van-tabs>
		 
		 <van-button @click="obtain_info">点击获取</van-button>
	</div>
</template>

<script>
import { ref,reactive } from 'vue';
import {getChannels} from '@/api/user'

export default {
  setup() {
    const value = ref('');
	const active = ref(0);
	// const channels = reactive([])
	// getChannels().then( res => channels =  res.data.data.channels )
	// console.log(channels)
	const obtain_info = async ()=>{
		return await getChannels()
	}
    return { value,
			 active,
			 obtain_info
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
	
	/deep/ .van-tabs__wrap{
		.van-tab{
			min-width: 110px;
			font-size: 16px;
			color: #777777;
		}
		.van-tab--active{
			color:#333333;
		}
		.van-tabs__line{
			bottom: 19px;
			width: 17px;
			height: 3px;
			background-color: #3296fa;
		}
		.hamburger_btn{
			position: fixed;
			right: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 36px;
			height: 45px;
			background-color: #fff;
			opacity: 0.902;
			i.toutioa{
				font-size: 18px;
			}
		}
		.place_holder{
			width: 36px;
			height: 45px;
			flex-shrink: 0;
		}
	}
	
</style>