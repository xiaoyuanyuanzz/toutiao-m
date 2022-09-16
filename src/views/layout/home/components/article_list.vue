<template>
	<div class="article_list_container">
		
		<van-pull-refresh v-model="isRefreshLoading" @refresh="onRefresh"
		 :success-text="refreshSuccessText"
		 success-duration="800"
	
		>
			<van-list
			  v-model:loading="loading"
			  :finished="finished"
			  finished-text="没有更多了"
			  @load="onLoad"
			  v-model:error="error"
			  error-text="请求失败，点击重新加载"
			>
			  <!-- <van-cell v-for="article in list" :key="article.art_id" :title="article.title" /> -->
			  <ArticleItem v-for="article in list" :key="article.art_id" :article="article" ></ArticleItem>
			</van-list>
		</van-pull-refresh>
		
		

	</div>
</template>

<script>	

import {ref} from 'vue'
import { getArticles } from '@/api/article'
import { Toast } from 'vant';
import ArticleItem from '@/components/article-item'

export default {
	setup(props){
		const obj = props.channel
		
		/* list组件内容 */
		 const list = ref([]);
		    const loading = ref(false);
		    const finished = ref(false);
			let timestam = ref(null)
			const error = ref(false);
			
			const onLoad = async ()=>{
				try{
					//1. 请求获取数据
					
					const {data} = await getArticles({
						channel_id:obj.id,
						timestamp: timestam || Date.now()
					})
					
					//2. 把请求结果数据放到list数组中
					
					const {results} = data.data
					list.value.push(...results)
					
					//3. 本次数据加载完成要把加载状态设置为false
					
					loading.value = false
					
					//4. 判断数据是否加载完成
					
					if(results.length){
						//获取更新下一页的时间戳
						timestam = data.data.pre_timestamp
					}else{
						finished.value = true
					}
					
				}catch(err){
					//finished.value = true
					error.value = true;
					console.log('请求失败',err)
					loading.value = false
				}
			}
			
		/* list组件内容 */
		
		//下拉刷新
		const isRefreshLoading = ref(false);
		const refreshSuccessText = ref('刷新成功')
		const onRefresh = async ()=>{
			try{
				const {data} = await getArticles({
					channel_id:obj.id,
					timestamp:Date.now()
				})
				
				const {results} = data.data
				
				list.value.unshift(...results)
				refreshSuccessText.value = `刷新成功，更新了${results.length}条数据`
				isRefreshLoading.value = false
				
			}catch(err){
				isRefreshLoading.value = false
				refreshSuccessText.value = '更新失败，请稍后重试'
			}
		}
		//下拉刷新
		
		return {
		      list,
		      onLoad,
		      loading,
		      finished,
			  obj,
			  timestam,
			  error,
			  isRefreshLoading,
			  onRefresh,
			  refreshSuccessText
		}
		
	},
	props:{
		channel:{
			type:Object,
			required:true
		}
	},
	components:{
		ArticleItem
	}
}
</script>

<style scoped lang="less">
	.article_list_container{
		height: 79vh;
		overflow-y: auto;
	}
</style>