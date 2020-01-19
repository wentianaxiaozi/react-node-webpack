// 压缩
const zlib = require('zlib')
const fs = require('fs')

const gzip = zlib.createGzip()
const inp = fs.createReadStream('./index.html')
const out = fs.createWriteStream('./index.html.gz')
inp.pipe(gzip).pipe(out)