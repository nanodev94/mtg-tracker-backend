import type { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

import { emailValidator, passwordValidator } from '@/utils/customValidators'
import { validateZodSchema } from '@/utils/validation'

const postLoginSchema = z.object({
  email: emailValidator,
  password: passwordValidator,
})

export const ValidatePostLoginSchema = (req: Request, _res: Response, next: NextFunction) => {
  validateZodSchema(postLoginSchema, req, next)
}
