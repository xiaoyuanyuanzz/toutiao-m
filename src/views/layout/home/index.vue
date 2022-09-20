<template>
	<div class="home_container">
		<!-- 导航栏 -->
		<van-nav-bar  class="page_nav_bar" style="background-color: #3296fa;" fixed >
			<template #title>
				<van-button class="search_btn" type='default' size='small' icon='search' round 
				 to="/search" >
					<span>搜索</span>
				</van-button>
			</template>
		 </van-nav-bar>
		 
		 <!-- tab栏 -->
		 <van-tabs v-model:active="active" animated swipeable sticky offset-top="46px">
		   <van-tab v-for="obj in channel_list.value" :key="obj.id" :title="obj.name" >
				<ArticleList :channel="obj" >123</ArticleList>
		   </van-tab>
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

	</div>
</template>

<script>
import { ref,reactive,onMounted,provide } from 'vue';
import {getChannels} from '@/api/user'
import ArticleList from './components/article_list'

export default {
  setup() {
    const value = ref('');
	const active = ref(0);
	// const channels = reactive([])
	// getChannels().then( res => channels =  res.data.data.channels )
	// console.log(channels)

	const channel_list = reactive([])
	onMounted(async ()=>{
		await getChannels().then( res => channel_list.value =  res.data.data.channels )
	})

	
    return { value,
			 active,
			 channel_list
		   };
  },
  components:{
	  ArticleList
  }
};
</script>

<style scoped lang="less">
	
	.home_container{
		padding-bottom: 50px;
		padding-top: 46px;
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