// const Koa = require('Koa')
// const app = new Koa()
//
// app.use(async (ctx)=> {
//     let url = ctx.request.url
//     ctx.body = url
// }).listen(3001)

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', function (ctx, next) {
    ctx.body = 'Hello wentianxiaozi'
})
    .get('/todo', (ctx, next)=>{
        ctx.body = 'todo page'
    })
app
    .use(router.routes())
    .use(router.allowedMethods())
app.listen(3002, ()=> {
    console.log('starting at port 3002')
})