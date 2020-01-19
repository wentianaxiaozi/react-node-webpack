// //阻塞代码
// var fs = require("fs")
// // var data = fs.readFileSync('input.txt')
// // console.log(data.toString())
// // console.log('程序执行结束')


// //非阻塞代码
// fs.readFile('./input.txt', function (err,data) {
//     console.log(err)
//     // console.log(data.toString())
// })
// console.log('程序执行结束')

// var a = {name: 1}
// var b = a
// console.log(a)
// console.log(b)
// b.name = 2

// console.log(a)
// console.log(b)
// console.log(a===b)

// b = {name: 3}
// console.log(a)
// console.log(b)
// console.log(a===b)


const promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve()
    console.log(2)
  })
  promise.then(() => {
    console.log(3)
  })
  console.log(4)
