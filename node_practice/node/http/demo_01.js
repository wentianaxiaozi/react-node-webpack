const http = require('http')
const server = http.createServer((req, res)=> {
    console.log(req.headers);
    res.end(`hello node.js`)
}).listen(3000)
