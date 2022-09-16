<template>
	<div>
		<van-cell class="article_item" >
			<template #title>
				<span class="title">{{article.title}}</span>
			</template>
			<template #label>
				<div>
					<span>{{article.aut_name}}</span>
					<span>{{article.comm_count}}评论</span>
					<span>{{article.pubdate}}</span>
				</div>
			</template>
			<template #default>
				<span class="title">123</span>
			</template>
		</van-cell>
	</div>
</template>

<script>
export default {
	props:{
		article:{
			type:Object,
			required:true
		}
	},
	setup(){
		
	}
}
</script>

<style>
</style>