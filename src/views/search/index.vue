<template>
	<div class="search_container">
		<form action="/">
		  <van-search
		    v-model="value"
		    show-action
		    placeholder="请输入搜索关键词"
			background="#3296fa"
		    @search="onSearch"
		    @cancel="onCancel"
			@focus="isResultShow=false"
		  />
		</form>
		
		<!-- 搜索结果 -->
		<search-result v-if="isResultShow"></search-result>
		
		<!-- 关联信息 -->
		<search-suggestion v-else-if="value" :search_text="value" :suggestion="suggestions"></search-suggestion>
		
		<!-- 搜索历史 -->
		<search-history v-else></search-history>
		

		

		
	</div>
</template>

<script>
import { ref,getCurrentInstance,onMounted,watch } from 'vue';
import { Toast } from 'vant';

import SearchHistory from './components/search-history.vue'
import SearchResult from './components/search-result.vue'
import SearchSuggestion from './components/search-suggestion.vue'

import {getSuggestion} from '@/api/suggestion'
import {getSearchResults} from '@/api/suggestion'
import {debounce} from 'lodash'

export default {
  setup() {
	const isResultShow = ref(false)
    const value = ref('');
	const {proxy} = getCurrentInstance()
    const onCancel = () => proxy.$router.back()
	const onSearch = (val) => {
		isResultShow.value = true
	}
	
	let suggestions = ref([])
	watch(value,debounce(async (newValue,oldValue)=>{
		try{
			const {data} = await getSuggestion(value)
			console.log(await getSearchResults(value)) 
			
			suggestions.value = data.data.options
		}catch(err){
			Toast('数据获取失败，请稍后重试')
		}
	},200) )
	
	
    return {
      value,
      onSearch,
      onCancel,
	  proxy,
	  isResultShow,
	  suggestions
    };
  },
  components:{
	  SearchHistory,
	  SearchResult,
	  SearchSuggestion
  }
};
</script>

<style scoped lang="less">
	
	.search_container{
		/deep/ .van-search__action{
			color: #fff;
		}
	}
	
</style>