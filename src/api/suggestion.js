import request from '@/utils/request'



export const getSuggestion = q => request({
	method:'GET',
	url:'v1_0/suggestion',
	params:{
		q
	}
})

export const getSearchResults = q =>request({
	method:'GET',
	url:'v1_0/search',
	params:{
		q
	}
})