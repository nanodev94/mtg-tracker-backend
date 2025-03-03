import type { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

import {
  artistValidator,
  colorValidator,
  rarityValidator,
  setIdValidator,
  subtypeValidator,
  treatmentValidator,
  typeValidator,
} from '@/utils/customValidators'
import { validateZodSchema } from '@/utils/validation'

const getKeywordsSchema = z.object({
  colors: z.array(colorValidator).optional(),
  types: z.array(typeValidator).optional(),
  subtypes: z.array(subtypeValidator).optional(),
  rarities: z.array(rarityValidator).optional(),
  artists: z.array(artistValidator).optional(),
  treatments: z.array(treatmentValidator).optional(),
  setIds: z.array(setIdValidator).optional(),
})

export const ValidateGetKeywordsSchema = (req: Request, _res: Response, next: NextFunction) => {
  validateZodSchema(getKeywordsSchema, req, next)
}
