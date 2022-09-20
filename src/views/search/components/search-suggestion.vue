<template>
	<div class="search_suggestion_container">
		<van-cell icon="search" v-for="i in 4">
			<template #title>
				<span v-html="highLight(str)"></span>
			</template>
		</van-cell>
	</div>
</template>

<script>
import {watch} from 'vue'

export default {
	
	setup(props){
		const highLight = text=>{
			const highLightStr = `<span class="active">${props.search_text}</span>`
			const reg = new RegExp(props.search_text,'gi')
			return text.replace(reg,highLightStr)
		}
		
		const str = "搜索内容"
		
		return {
			highLight,
			str
		}
	},
	props:{
		search_text:{
			type:String,
			required:true,
			default:''
		},
		suggestion:{
			type:Object,
			required:true
		}
	}
}
</script>

<style scoped lang="less">
	/deep/ .active{
		color: red;
	}
</style>