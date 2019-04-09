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
  	entry: {
  		//chunk名称：文件
  		common:'./src/page/common/index.js',
  		main:'./src/page/index/index.js'
  	},
  	//多入口即单入口写法二，多写几个

  	output: {
  	  filename: '[name].[hash].bundle.js',
  	  // filename: '[name]-[chunkhash].bundle.js',
  	  path: path.resolve(__dirname, 'dist')//怎么拼的
  	},
  	//filename不用带路径
  	//path用绝对路径
  	module:{
	  	rules: [
	  		//处理css文件
	      	{
	        	test: /\.css$/i,
	        	use: [
		           'style-loader',
		           'css-loader'
		        ]
	       	},
	       	//处理图片
	       	{
		        test: /\.(png|svg|jpg|gif)$/,
		        use: [
		        	{
			           loader:'url-loader',
			           options:{
			           	limit:10//单位是字节，当图片大小超过limit值后,会生成一个文件
			        	//url-loader默认使用file-loader处理图片文件,所以需要额外安装file-loader   
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
	        inject:true,//脚本写在那个标签里,默认是true(在body结束后)
	        hash:true//给生成的js/css文件添加一个唯一的hash
	    }),
	    new cleanWebpackPlugin()
	],
	devServer:{
    contentBase: './dist',//内容的目录
    port:8080//服务运行的端口
  	}
};