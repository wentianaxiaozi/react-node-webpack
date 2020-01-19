// 文件解压
const zlib = require('zlib')
const fs = require('fs')
const gunzip = zlib.createGunzip()
const inp = fs.createReadStream('./banner.jpg.gz')
const out = fs.createWriteStream('./banner_o1.jpg')
inp.pipe(gunzip).pipe(out)