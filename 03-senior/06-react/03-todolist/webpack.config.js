const path = require('path');
const htmlWebpackPlugin = require('html-Webpack-Plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  	mode:'development',
  	entry:'./src/index.js',
  	output: {
  	  filename: 'bundle.js',
  	  path: path.resolve(__dirname, 'dist')
  	},
  	module:{
	  	rules: [
	      	{
	        	test: /\.css$/i,
	        	use: [
		           'style-loader',
		           'css-loader'
		        ]
	       	},
	       	{
		        test: /\.(png|svg|jpg|gif)$/,
		        use: [
		        	{
			           loader:'url-loader',
			           options:{
			           	limit:10
			           }
			        }
		        ]
	    	},
	    	{
			    test: /\.js$/,
			    exclude: /(node_modules)/,//排除node_modules下面的js文件
			    use: {
			      	loader: 'babel-loader',
			      	options: {
			        	presets: ['env','react'],
			        	/*安装babel-plugin-import：npm install --save-dev babel-plugin-import
			        	再通过下面这行代码可以实现antd的样式按需加载,使用时只需从 antd 引入模块即可，无需单独引入样式。*/
			        	plugins: [["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]]
			      	}
			    }
			}
	    ]
    },
    plugins:[
	    new htmlWebpackPlugin({
	        template:'./src/index.html',
	        filename:'index.html',
	        inject:true,
	        hash:true
	    }),
	    new cleanWebpackPlugin()
	],
	devServer:{
    contentBase: './dist',
    port:8080
  	}
};