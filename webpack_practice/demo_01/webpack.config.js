// const path = require('path')
// module.exports = {
//     entry: './src/index.js', //入口文件
//     output: {
//         filename: 'bundle.js', //打包后的文件名称
//         path: path.resolve('dist') //打包后的目录,必须是绝对路径
//     }
// }


//多入口文件打包
// let path = require('path')

// module.exports = {
//     // 真正实现多入口和多出口需要写成对象的方式
//     entry: {
//         index: './src/index.js',
//         login: './src/hello.js'
//     },
//     output: {
//         filename: '[name].js',
//         path: path.resolve('dist')
//     }
// }



// let path = require('path')
// let HtmlWebpackPlugin = require('html-webpack-plugin');
// // 拆分css样式的插件
// let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

// // // 插件都是一个类,命名尽量大写
// // let HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         //添加hash防止文件缓存,每次生成都生成4位hash
//         filename: 'bundle.[hash:4].js',
//         path: path.resolve('dist')
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/, //解析css
//                 use: ExtractTextWebpackPlugin.extract({
//                     use: 'css-loader'
//                 })
//             }
//         ]
//     },
//     plugins: [
//         //通过new一下这个类来使用插件
//         new HtmlWebpackPlugin({
//             template: './src/index.html',
//             hash: true
//         }),
//         // 拆分后会把css文件放到dist目录下的css/style.css
//         new ExtractTextWebpackPlugin('css/style.css')  
//     ]
// }

let path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        pageA: './src/pageA.js',
        pageB: './src/pageB.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash:8].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templet.html',
            filename: 'pageA.html',
            title: 'pageA',
            chunks: ['pageA'],
            hash: true,
            minify: {
                removeAttributeQuotes: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/templet.html',
            filename: 'pageB.html',
            title: 'pageB',
            chunks: ['pageB'],
            hash: true,
            minify: {
                removeAttributeQuotes: true
            }
        })
    ]
}