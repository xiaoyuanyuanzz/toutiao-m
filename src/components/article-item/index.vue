<template>
	<div>
		<van-cell class="article_item" >
			<template #title>
				<span class="title van-multi-ellipsis--l2">{{article.title}}</span>
			</template>
			<template #label>
				<div class="cover_wrap" v-if="article.cover.type === 3">
					<div class="cover_item" v-for="(img,index) in article.cover.images" :key="index">
						<van-image
						  class="img_cover_3"
						  fit="cover"
						  :src="img"
						/>
					</div>
				</div>
				
				<div class="label_cover">
					<span>小白白</span>
					<span>{{article.comm_count}}评论</span>
					<span>{{time}}</span>
				</div>
			</template>
			<template #default v-if="article.cover.type === 1">
				<van-image
					fit="cover"
					class="img_cover"
				    :src="article.cover.images[0]"
				/>
			</template>
		</van-cell>
	</div>
</template>

<script>

import {onMounted} from 'vue'	
import $ from 'jquery'
import dayjs from '@/utils/dayjs'

export default {
	props:{
		article:{
			type:Object,
			required:true
		}
	},
	setup(props){
		//onMounted()  
			/*let right = $('.van-cell__value')
			if(props.article.cover.type === 1){
				right.css("display","block")
			}
			else{
				right.css("display","none")
			}*/
		const filter = value => dayjs().to(dayjs(value))
		const time = filter(props.article.pubdate) 
		console.log(props.article.pubdate)
		
		return {time,filter}
	}
}
</script>

<style scoped lang="less">
	/deep/ .article_item{
		.title{
			font-size: 17px;
			color: #3a3a3a;
		}
		.van-cell__value{

			flex: unset;
			width: 127px;
			height: 80px;
			padding-left: 14px;
		}
		.img_cover{
			width: 127px;
			height: 80px;
		}
		.label_cover span{
			font-size: 12px;
			color: #b4b4b4;
			margin-right: 10px;
		}
		.cover_wrap{
			display: flex;
			padding: 14px 0;
			.cover_item{
				flex: 1;
				height: 80px;
				&:not(:last-child){
					padding-right: 2px;
				}
				.img_cover_3{
					width: 100%;
					height: 80px;
				}
			}
		}
	}
</style>