import { OpenAPIHono } from '@hono/zod-openapi'


import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares'
import { logger } from './lib/logger'
const app = new OpenAPIHono()
app.notFound(notFound)
app.use(serveEmojiFavicon("🦊"))
app.onError(onError)
app.use(logger)
app.get('/', (c) => {
  
  return c.text('Hello Hono!')
})
app.get('/error', (c) => {
  throw new Error('This is an error')
})

export default app
