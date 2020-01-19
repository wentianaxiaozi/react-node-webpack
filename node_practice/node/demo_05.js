// //管道流
// var fs = require('fs')
// //创建可读流
// var readerStream = fs.createReadStream('input.txt')
// //文件可写流
// var writeStream = fs.createWriteStream('output.txt')
//
// //管道读写操作
// readerStream.pipe(writeStream)
//
// console.log('程序执行完毕')


//链式流
var fs = require('fs')
var zlib = require('zlib')

//压缩input.txt 文件为input.txt.gz

fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'))

console.log('文件压缩完成')