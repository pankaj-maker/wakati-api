import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares'
import { logger } from './logger'
export default function createRouter() {

return new OpenAPIHono({
    strict:false
})
}
export function createApp() {   
const app= createRouter()
app.notFound(notFound)
app.use(serveEmojiFavicon("🦊"))
app.onError(onError)
app.use(logger)
return app
}
