<template>
	<div class="search_history_container">
		<van-cell title="单元格" >
			
			
			<span>全部删除</span>
			<span>完成</span>
			
		  <!-- 使用 right-icon 插槽来自定义右侧图标 -->
		  <template #right-icon>
		    <van-icon name="delete-o" class="search-icon" />
		  </template>
		</van-cell>
		
		<van-cell title="hello">

		  <!-- 使用 right-icon 插槽来自定义右侧图标 -->
		  <template #right-icon>
		    <van-icon name="close" style="line-height: inherit;" />
		  </template>
		</van-cell>
		
		<van-cell title="hello">

		  <!-- 使用 right-icon 插槽来自定义右侧图标 -->
		  <template #right-icon>
		    <van-icon name="close" style="line-height: inherit;" />
		  </template>
		</van-cell>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.search_history_container{
		  .search-icon {
		    font-size: 16px;
		    line-height: inherit;
		  }
	}
</style>