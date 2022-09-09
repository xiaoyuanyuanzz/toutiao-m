module.exports = {
	lintOnSave:false,
	devServer:{
		proxy:{
			'/api':{
				target:'http://toutiao.itheima.net/',
				ws:true,
				changeOrigin:true,
				pathRewrite:{
					'^/api':'/'
				}
				
			}
		}
	}
}