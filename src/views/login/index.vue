<template>
	<div class="login_container">
		
		<!-- 导航栏 -->
		<van-nav-bar title="登录" class="page_nav_bar" style="background-color: #3296fa;" 
		   left-text="返回"
		   left-arrow
		   @click-left="onClickLeft"
		 />
		<!-- 登录表单 -->
 		<van-form @submit="onSubmit" ref="loginForm">
		  <van-cell-group inset style="margin: 0;">
		    <van-field
			  v-model="user.mobile"
		      name="mobile"
		      placeholder="请输入手机号"
			  :rules="userFormRules.mobile"
			  type='number'
			  maxlength='11'
		    >
				<template #left-icon>
					<i class="toutioa toutiao-shouji"></i>
				</template>
				
		    </van-field>
		    <van-field
			  v-model="user.code"
		      name="code"
		      placeholder="请输入验证码"
			  :rules="userFormRules.code"
			  type='number'
			  maxlength='6'
		    >
				<template #left-icon>
					<i class="toutioa toutiao-yanzhengma"></i>
				</template>

				<template #button>
				  <van-count-down v-if="isCountDownShow" :time="time" format="ss s" @finish="isCountDownShow = false" />
				  <van-button v-else size="small" type="default" round class="send_msg_code" @click="onSendCode" >获取验证码</van-button>
				</template>
		    </van-field>
		  </van-cell-group>
		  <div style="margin: 16px;" class="login_btn_wrap">
		    <van-button block type="primary" native-type="submit" class="login_submit" >
		      提交
		    </van-button>
		  </div>
		</van-form> 
		
		<!-- TODO -->

		
		
		
	</div>
</template>

<script>

import $ from 'jquery'

import { login , sendCode} from '@/api/user'

import { ref , reactive} from 'vue'

//import {getCurrentInstance, onMounted} from '@vue/runtime-core'

import {getCurrentInstance as gci} from 'vue'

import {Toast} from 'vant'
export default {
  setup() {
	  let {proxy} = gci()
	  
	  let {ctx} = gci()
	  
	  const time = ref(30*1000)
	  
	  let isCountDownShow = false
	  
	  const user = reactive({
		  mobile:'',
		  code:''
	  })
	  
	  const userFormRules = reactive({
	  		  mobile:[{
				  required:true,
				  message:'请填写手机号'
			  },{
				  pattern:/^([1][3,4,5,6,7,8,9])\d{9}$/,
				  message:'手机号格式错误'
			  }],
	  		  code:[{
				  required:true,
				  message:'请填写验证码'
			  },{
				  pattern:/^\d{6}$/,
				  message:'验证码格式错误'
			  }]
	  })
	  
	  const onClickLeft = () => {
		  history.back();
	  }
	  
    const onSubmit = async () => {
		Toast.loading({
		  message: '登录中',
		  forbidClick: true,
		  duration:0
		});
		try{
			const {data} = await login(proxy.user)
			proxy.$store.commit('setUser',data.data)
			console.log('登录成功',data)
			Toast.success('登录成功')
			proxy.$router.back()
		}catch(err){
			if(err.response.status === 400){
				Toast.fail('手机号或验证码错误')
			}else{
				Toast.fail('登录失败')
			}
			
		}

    };
	
	
	const onSendCode = async ()=>{
		//验证手机号
		try{
			const res = await proxy.$refs.loginForm.validate('mobile')
			console.log('验证成功',res)
			console.log(proxy.isCountDownShow)
		}catch(err){
			return console.log('验证失败',err)
		}
		
		proxy.$nextTick(()=>{
			proxy.isCountDownShow = true
		})
		try{
			const res = await sendCode(proxy.user.mobile)
			document.querySelector('#van-field-2-input').value = ''
			proxy.$toast('发送成功')
			
		}catch(err){
			//proxy.$toast('发送失败')
		}
		
	}


    return {
		user,
		userFormRules,
      onSubmit,
	  onSendCode,
	  time,
	  isCountDownShow,
	  ctx,
	  proxy,
	  onClickLeft
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