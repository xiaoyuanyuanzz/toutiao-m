<template>
	<div class="login_container">
		
		<!-- 导航栏 -->
		<van-nav-bar title="登录" class="page_nav_bar" style="background-color: #3296fa;" />
		<!-- 登录表单 -->
 		<van-form @submit="onSubmit">
		  <van-cell-group inset style="margin: 0;">
		    <van-field
			  v-model="user.mobile"
		      name="手机号"
		      placeholder="请输入手机号"
		    >
				<template #left-icon>
					<i class="toutioa toutiao-shouji"></i>
				</template>
				
		    </van-field>
		    <van-field
			  v-model="user.code"
		      name="验证码"
		      placeholder="请输入验证码"
		    >
				<template #left-icon>
					<i class="toutioa toutiao-yanzhengma"></i>
				</template>

				<template #button>
				  <van-button size="small" type="default" round class="send_msg_code">获取验证码</van-button>
				</template>
		    </van-field>
		  </van-cell-group>
		  <div style="margin: 16px;" class="login_btn_wrap">
		    <van-button block type="primary" native-type="submit" class="login_submit">
		      提交
		    </van-button>
		  </div>
		</van-form> 
		
		<!-- TODO -->

		
		
		
	</div>
</template>

<script>

import { login } from '@/api/user'

import { ref , reactive} from 'vue'
export default {
  setup() {
	  const user = reactive({
		  mobile:'',
		  code:''
	  })
    const onSubmit = async () => {
		const res = await login(user)
		console.log('登录成功',res)
    };

    return {
		user,
      onSubmit,
    };
  },
};


</script>

<style scoped lang="less">
	.login_container{
		.toutioa{
			font-size: 20px;
		}
		
		.send_msg_code{
			background-color: #ededed;
			color: #666;
		}
	.login_btn_wrap{
		padding: 24px 16px;
		.login_submit{
			background-color: #6db4fb;
			border: 0;
		}
	}
}
</style>