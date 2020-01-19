const hello = require('./hello.js')
import '../css/style.css'
document.querySelector('#root').appendChild(hello())

// index.js
// const hello = require('./hello.js');
// document.querySelector("#root").innerHTML = 'hello';