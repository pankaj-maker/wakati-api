import configureOpenAPI from './lib/configure-openapi'
import createApp from './lib/create-app'
const app = createApp()
configureOpenAPI(app)
app.get('/', (c) => {
  
  return c.text('Hello Hono!')
})
app.get('/error', (c) => {
  throw new Error('This is an error')
})
export default app
