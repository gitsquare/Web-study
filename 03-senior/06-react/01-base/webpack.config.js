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

	    	//手动安装webpack并配置。修改webpack配置文件添加bable-loader
	    	//加了babel-loader以后，所有的js文件就用babel-loader处理
	    	{
			    test: /\.js$/,
			    exclude: /(node_modules)/,//过滤的作用，排除node_modules下面的js文件
			    use: {
			      	loader: 'babel-loader',
			      	options: {
			        	presets: ['env','react']
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