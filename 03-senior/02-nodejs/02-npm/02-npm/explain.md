npm init会生成package.json文件,这个文件不能写注释，否则会安装不成功。


1.如果带参数-g,表明全局安装,这样安装的包在/usr/local/lib/node_modules(路径和系统有关)
文件夹中，可以在命令行中使用,但不可以在项目中require,使用-g参数时没有--save

2.如果不带参数-g,表明本地安装,包文件安装在当前文件夹的node_modules文件夹中,
只能在当前项目中使用require引入模块

3.参数--save:把包的版本信息添加到package.json中dependencies 中(默认),
一般是需要最终需要打包到业务代码中的依赖

4.参数--save-dev: 依赖会加在package.json的devDependencies中,
一般是辅助开发的依赖,不会打包上线的 

5.npm install --production 只安装package.json中dependencies 中的包

6.npm install 会安装 package.json中的所有依赖

7.安装包时可以在包名后面加上@版本号来指定需要安装的版本,不加时默认安装最新版本

8.package.json 可以锁定大版本但不锁定小版本

9.安装包后还会生成一个package-lock.json文件,这个文件会锁定安装的这个版本

10.如果需要原版本，把这两个文件都拷贝下来，如果只拷贝package.json文件，只会锁定大版本，小版本默认是最新的版本                   

11.卸载包 npm uninstall 包名 [-g] [--save] [--save-dev] 
安装用什么参数卸载就用什么参数