import type { Request, Response } from 'express'
import { generateHTML } from 'swagger-ui-express'

const SwaggerMiddleware = async (_req: Request, res: Response) => {
  return res.send(generateHTML(await import('../tsoa/swagger.json')))
}

export default SwaggerMiddleware
