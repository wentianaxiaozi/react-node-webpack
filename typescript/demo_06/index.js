// var res;
// (function (res) {
//     res["up"] = "up";
//     res["down"] = "down";
// })(res || (res = {}));
// console.log(res);

var arr = [ '-','1', '2', '3', '4', '5', '6' ]
let _arr = arr.reverse()
_arr.unshift(_arr.pop())
var res = _arr.join(',')
var reg = res.replace(/\,/g, '')

console.log(_arr);
_arr = arr.reverse()
