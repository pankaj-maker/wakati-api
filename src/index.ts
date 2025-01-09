import configureOpenAPI from './lib/configure-openapi'
import {createApp} from '@/lib/create-app'
import index from './routes/index.routes'
const app = createApp()
configureOpenAPI(app)
const routes =[index]
routes.forEach(route=> app.route('/',route))
  
 
export default app
