<template>
	<div class="my_container">
		<div class="header not_login" v-if="!user">
			<div class="login_btn" @click="$router.push('/login')">
				<img src="~@/assets/mobile.png" alt="" class="ctrl_img">
				<span class="text">登录 / 注册</span>
			</div>
		</div>
		
		<div class="header user_info" v-else>
			<div class="base_info">
				<div class="left">
					<van-image
					  fit="cover"
					  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
					  class="user_avt"
					  round
					/>
					<span class="user_id">头条账号</span>
				</div>
				<div class="right">
					<van-button size="mini" round>编辑信息</van-button>
				</div>
			</div>
			<div class="base_status">
				<div class="data_item">
					<span class="count">10</span>
					<span class="text">头条</span>
				</div>
				
				<div class="data_item">
					<span class="count">10</span>
					<span class="text">关注</span>
				</div>
				
				<div class="data_item">
					<span class="count">10</span>
					<span class="text">粉丝</span>
				</div>
				
				<div class="data_item">
					<span class="count">10</span>
					<span class="text">获赞</span>
				</div>
			</div>
		</div>
		<!-- 导航宫格 -->
		<van-grid :column-num="2" class="grid_nav" clickable>
		  <van-grid-item  class="grid_item">
			  <template #icon>
				  <i class="toutioa toutiao-shoucang"></i>
			  </template>
			  <template #text>
					<span>收藏</span>
			  </template>
		  </van-grid-item>
		  <van-grid-item class="grid_item">
			  <template #icon>
				<i class="toutioa toutiao-lishi"></i>  
			  </template>
			  <template #text>
			  		<span>历史</span> 
			  </template>
		  </van-grid-item>
		</van-grid>
		
		<van-cell title="消息通知" is-link />
		<van-cell title="小智同学" is-link />
		<van-cell title="退出登录" class="exit_login" v-if="user" @click="exit_log" clickable />
	</div>
</template>

<script>
	import $ from 'jquery'
	import {useStore} from 'vuex'
	import {computed} from 'vue'
	import {getCurrentInstance as gci} from 'vue'
	import {Dialog} from 'vant'
	import {getUserInfo} from '@/api/user'
	
	export default {
	  setup() {
		  const {proxy} = gci()
		  const store = useStore()
		  const user = computed(()=> store.state.user);
		  
		  
		  const exit_log = ()=>{
			  Dialog.confirm({
				  message:
					'您确定要退出登录吗？',
				})
				  .then(() => {
					// on confirm
					proxy.$store.commit('setUser',null)
				  })
				  .catch(() => {
					// on cancel
				  })
		     }
		   const loadUserInfo = async ()=>{
			   try{
				   const {data} = await getUserInfo()
				   console.log(data)
			   }catch(err){
				   proxy.$toast('获取数据失败，请稍后重试')
			   }
		   }
		   
		  
		  return {
			  store,
			  user,
			  exit_log,
			  proxy,
			  loadUserInfo
		  }
	  },
	};
</script>

<style scoped lang="less">
	.my_container{
		.header{
			height: 200px;
			background: url('~@/assets/banner.png');
			background-size: cover;
		}
		.not_login{
			display: flex;
			justify-content: center;
			align-items: center;
			.login_btn{
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				.ctrl_img{
					width: 80px;
					height: 80px;
					margin-bottom: 10px;
				}
				.text{
					font-size: 16px;
					color: #fff;
				}
			}
		}
		.user_info{
			.base_info{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 42px 18px 13px;
				.left{
					display: flex;
					justify-content: center;
					align-items: center;
					.user_avt{
						height: 73px;
						width: 73px;
						margin-right: 13px;
						border: 2px solid #fff;
					}
					.user_id{
						font-size: 17px;
						color: #fff;
					}
				}

			}
			.base_status{
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				height: 73px;
				.data_item{
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					color: #fff;
					.count{
						font-size: 20px;

					}
					.text{
						font-size: 13px;
					}
				}
			}
		}
		
		.grid_nav{
			.grid_item{
				height: 78px;
				 .toutioa {
					font-size: 24px;
				}
				.toutiao-shoucang {
					color: #eb5253 !important;
				}
				 span{
					 margin-top: 5px;
					font-size: 16px;
				}
			}
		}
		
		.exit_login{
			text-align: center;
			color: #eb5253;
		}
	}
</style>