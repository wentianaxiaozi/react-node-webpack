const http = require('http')

const server = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'image/jpg'})
    const r = require('fs').createReadStream('./banner.jpg')
    r.pipe(res)
}).listen(3000, ()=>{
    console.log('server start')
})


