import type { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

import { languageCodeValidator, uiModeValidator } from '@/utils/customValidators'
import { validateZodSchema } from '@/utils/validation'

const putUserSchema = z.object({
  languageCode: languageCodeValidator.optional(),
  uiMode: uiModeValidator.optional(),
})

export const ValidatePutUserSchema = (req: Request, _res: Response, next: NextFunction) => {
  validateZodSchema(putUserSchema, req, next)
}
