// var buf = Buffer.from('www.baidu.com')
// var json = buf.toJSON(buf)
// console.log(json)
//缓冲区合并
var buffer1 = Buffer.from('菜鸟教程')
var buffer2 = Buffer.from('www.baidu.com')
var buffer3 = Buffer.concat([buffer1, buffer2])
console.log(buffer3.toString())