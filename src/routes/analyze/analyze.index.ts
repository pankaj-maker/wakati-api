import {createRouter} from '@/lib/create-app'
import *  as handler from './analyze.handlers'
import *  as routes from './analyze.routes'

const router = createRouter().openapi(routes.analyze,handler.analyze)

export default router
