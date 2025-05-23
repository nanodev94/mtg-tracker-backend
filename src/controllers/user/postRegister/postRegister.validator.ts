import type { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

import { emailValidator, languageCodeValidator, passwordValidator } from '@/utils/customValidators'
import { validateZodSchema } from '@/utils/validation'

const postRegisterSchema = z.object({
  email: emailValidator,
  password: passwordValidator,
  languageCode: languageCodeValidator,
})

export const ValidatePostRegisterSchema = (req: Request, _res: Response, next: NextFunction) => {
  validateZodSchema(postRegisterSchema, req, next)
}
