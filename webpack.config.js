

// webpack配置文件

// 这个配置文件，其实就是一个 JS 文件，通过Node中的模块操作，向外暴露了一个配置对象
let path = require('path')
 let webpack = require('webpack') //启用热更新第二步
let htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry:'./src/index.js',//入口
    output:{
        filename:'bundle.js',
        path:path.resolve('./dist')
    },//出口
    devServer:{
         open:true,
         port:3000,
         contentBase:'./src',
         hot: true, //启用热更新第一步
    },//开发服务器
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },//用来处理css的第三代模块,处理顺序，从后向前
           {
               test:/\.less$/,
               use:['style-loader','css-loader','less-loader']
            },//用来处理less文件的第三方模块
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.(jpg|jpeg|png|gif|bmp)$/,
                use:'url-loader?limit=30000&name=[hash:8]-[name].[ext]'
            },//处理图片路径的loader
            // limit 给定的值，是图片的大小，单位是byte，如果我们引用的图片大于这个大小，则不会转为base64编码，如果小于这个大小，则会转为base64编码
            // name=[name].[ext]表示名字后缀不变,name=[hash:8]-[name].[ext]前面有8为哈希值
             /*  {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体文件loader */
            {
                test:/\.js$/,
                use:'babel-loader',exclude:/node_modules/
            },//配置babel来转化高级的ES语法
            {
                test:/\.vue$/,
                use:'vue-loader'
            },//处理vue的loader
        ],//所有的匹配规则
    },//模块配置（用于配置所有的第三方模块加载器）
    plugins:[
         new webpack.HotModuleReplacementPlugin(),//启用热更新第三步
        new htmlWebpackPlugin({ // 创建一个在内存汇总生成html页面的插件
            template:path.resolve('./src/index.html'),//指定模板页面,
            filename:'index.html',//指定生成页面的名称
        }),
        new VueLoaderPlugin(),
    ],//插件
    mode:'development',//开发者模式
    resolve:{ },//配置解析
}