import type { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

import { cardIdValidator, setIdValidator, treatmentValidator } from '@/utils/customValidators'
import { validateZodSchema } from '@/utils/validation'

const getUserCardsSchema = z.object({
  setIds: z.array(setIdValidator).optional(),
  cardIds: z.array(cardIdValidator).optional(),
  treatments: z.array(treatmentValidator).optional(),
})

export const ValidateGetUserCardsSchema = (req: Request, _res: Response, next: NextFunction) => {
  validateZodSchema(getUserCardsSchema, req, next)
}
