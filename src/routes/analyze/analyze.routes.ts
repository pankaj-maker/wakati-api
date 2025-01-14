import { createRoute, z } from '@hono/zod-openapi'

export const analyze = createRoute({
  method: 'post',
  path: '/analyze',
  request: {
    body:{
        content:{
            'application/json':{
                schema:z.object({
                    text:z.string(),
                })
            }
        }
    }
},
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            message: z.string(),
          }),
        },
      },
      description: 'Hello from wakati',
    },
},
})
export type AnalyzeRoute = typeof analyze