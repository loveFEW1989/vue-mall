const Koa = require('koa')

const app = new Koa()

app.use(async(ctx, next) => {
  ctx.body = '<h1>XXX</h1>'
})

app.listen(3000)