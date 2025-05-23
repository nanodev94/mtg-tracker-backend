import type { NextFunction, Request } from 'express'
import { ZodError, type ZodSchema } from 'zod'

import BadRequestException from './exceptions/badRequest'

export const validateZodSchema = (schema: ZodSchema, req: Request, next: NextFunction) => {
  const { body, query } = req

  try {
    schema.parse({ ...body, ...query })
    next()
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = error.issues.map(({ path, message }) => {
        return `${path[0]}: ${message}`
      })
      next(new BadRequestException(JSON.stringify({ errors })))
    } else {
      next(new BadRequestException())
    }
  }
}
