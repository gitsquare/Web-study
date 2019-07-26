1.安装webpack并配置

2.安装react react-dom    npm install --save react react-dom

3.1安装 babel  npm i babel-core babel-loader babel-loader@7 babel-preset-env babel-preset-react --save-dev
	
3.2修改webpack配置文件添加bable-loader,加了babel-loader以后，所有的js文件就用babel-loader处理
{
    test:/\.js$/,
    exclude: /(node_modules)/, //过滤的作用，排除node_modules下面的js文件
    use: [
	    {
	        loader: 'babel-loader',
	        options: {
	            presets: ['env', 'react']
	        }
	    } 
	]              
}
3.3Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。


