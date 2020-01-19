// 服务器端gzip压缩

const fs = require('fs')
const http = require('http')
const zlib = require('zlib')
const filepath = './index.html'

// 创建服务
const server = http.createServer((req, res)=>{
    //会将客户端能够理解的内容编码方式---通常是某种压缩算法---进行通知(服务端)
    const acceptEncoding = req.headers['accept-encoding']
    if(acceptEncoding.includes('gzip')){
        const gzip = zlib.createGzip() //开启压缩
        res.writeHead(200, {
            'Content-Encoding': 'gzip'
        })
        fs.createReadStream(filepath)
            .pipe(gzip)
            .pipe(res)
    }else {
        fs.createReadStream(filepath).pipe(res)
    }
})

server.listen(3001)