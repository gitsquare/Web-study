const path = require('path');
const htmlWebpackPlugin = require('html-Webpack-Plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  	mode:'development',
  	// mode:'production',
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