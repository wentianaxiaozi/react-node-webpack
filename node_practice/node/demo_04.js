// //读取流
// var fs = require("fs")
// var data = ''
//
// //创建可读流
// var readerStream = fs.createReadStream('input.txt')
//
// //设置编码为utf8
// readerStream.setEncoding('UTF8')
// //处理流事件
// readerStream.on('data', function(chunk)  {
//     data += chunk
// })
//
// readerStream.on('end', function () {
//     console.log(data)
// })
//
// readerStream.on('error', function (err) {
//     console.log(err)
// })
// console.log('程序执行完毕')

//写入流
var fs = require("fs")
var data = '菜鸟教程: www.baidu.com, 我是你爷爷'

//创建一个写入流
var writeStream = fs.createWriteStream('output.txt')

//使用utf8编码
writeStream.write(data, 'UTF8')
//标记文件末尾
writeStream.end()
writeStream.on('finish', function () {
    console.log('文件写入完成')
})

writeStream.on('error', function (err) {
    console.log(err)
})

console.log('程序执行完毕')