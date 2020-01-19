// //引入events模块
// var events = require('events')
// //创建eventEmitter 对象
// var eventEmitter = new events.EventEmitter()
//
// //创建事件处理程序
// var connectHandler = function connected() {
//     console.log('链接成功')
//     eventEmitter.emit('data_received')
// }
//
// //绑定connection处理程序
// eventEmitter.on('connection', connectHandler)
//
// //使用匿名函数绑定 data_received
// eventEmitter.on('data_received', function () {
//     console.log('数据接收成功')
// })
//
// //触发connection`事件
// eventEmitter.emit('connection')
// console.log('程序执行完毕')



var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter()
event.on('some_event', function() {
    console.log('some_event 事件触发')
})
setTimeout(function () {
    event.emit('some_event')
},3000)