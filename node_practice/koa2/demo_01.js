const Koa = require('Koa')
const app = new Koa()
app.use(async (ctx)=> {
    if(ctx.url === '/' && ctx.method === 'GET') {
        //显示表单页面
        let html = `
            <h1>Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>username</p>
                <input type="text" name="username"><br>
                <p>age</p>
                <input type="text" name="age"><br>
                <p>website</p>
                <input type="text" name="website"><br>
                <button type="submit">submit</button>
            </form>
        `
        ctx.body = html
    }else if(ctx.url === '/' && ctx.method === 'POST') {
        let pastData = await parsePostData(ctx)
        ctx.body = pastData
    }else {
        ctx.body = `<h1>404!</h1>`
    }
})

function parsePostData(ctx) {
    return new Promise((resolve, reject)=> {
        try {
            let postData = ''
            ctx.req.on('data', (data)=> {
                postData += data
            })
            ctx.req.addListener("end", function () {
                let parseData = parseQueryStr(postData)
                resolve(parseData)
            })

        }catch (error) {
            reject(error)
        }
    })
}

function parseQueryStr(queryStr) {
    let queryData = {}
    let queryStrList = queryStr.split('&')
    console.log(queryStrList)

    for( let [index,queryStr] of queryStrList.entries() ){
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData
}


app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});