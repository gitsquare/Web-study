const path = require('path');
const htmlWebpackPlugin = require('html-Webpack-Plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	//指定打包环境
  	mode:'development',


  	//指定入口
  	//单入口写法一(简写)
  	// entry: './src/index.js',
  	//单入口写法二
  	// entry:{main:'./src/index.js'}
  	//多入口即单入口写法二，多写几个
  	entry: {
  		//chunk名称：文件
  		common:'./src/page/common/index.js',
  		main:'./src/page/index/index.js',
  	},


  	//指定出口
  	output: {
  		//出口文件名称
	  	// filename: '[name].[hash].bundle.js',
	  	filename: '[name]-[chunkhash].bundle.js',
	  	// 出口文件所在的目录，用绝对路径
	  	path: path.resolve(__dirname, 'dist')
  	},


  	// 关于模块配置
  	module:{
  		// // 模块规则（配置 loader、解析器等选项），是一个数组，可以设置多个规则
	  	rules: [
	  		//处理css文件
	      	{
	      		//匹配条件，以.css结尾不区分大小写
	        	test: /\.css$/i,
	        	// 应用多个 loader 和选项
	        	use: [
		           'style-loader',
		           'css-loader'
		        ]
	       	},
	       	//处理图片
	       	{
		        test: /\.(png|svg|jpg|gif)$/,
		        use: [
		        	// 如果loader需要进行配置，要放一个对象
		        	{
			           loader:'url-loader',
			           // loader 的可选项
			           options:{
			            /*limit代表使用此loader打包的文件大小的上限，当文件大小不超过limit值后,会生成一个base64文件，
			           	直接以字符串的形式传递出去，用法是一些小图片可以直接生成base64编码，减少http请求。单位是字节，*/
			        	//当文件大小超过limit值后，会单独生成一个文件。url-loader默认使用file-loader处理图片文件,所以需要安装file-loader   
			           	limit:10
			           }
			        }
		        ]
	    	}
	    ]
    },



    plugins:[
	    new htmlWebpackPlugin({
	        template:'./src/view/index.html',//模板文件
	        filename:'index.html',//输出的文件名
	        inject:true,//脚本写在哪个标签里,默认是true(在body结束后)
	        hash:true//给生成的js/css文件添加一个唯一的hash
	    }),
	    new cleanWebpackPlugin()
	],
	devServer:{
    contentBase: './dist',//内容所在目录
    port:8080//服务运行的端口
  	}
};