import type { Request, Response } from 'express'

import { MESSAGES } from '@/constants/messages'

const NotFoundMiddleware = (_req: Request, res: Response) => {
  return res.status(404).send({
    message: MESSAGES.NOT_FOUND,
  })
}

export default NotFoundMiddleware
