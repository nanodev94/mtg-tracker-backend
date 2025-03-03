import type { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

import {
  colorValidator,
  keywordValidator,
  rarityValidator,
  setIdValidator,
  subtypeValidator,
  treatmentValidator,
  typeValidator,
} from '@/utils/customValidators'
import { validateZodSchema } from '@/utils/validation'

const getArtistsSchema = z.object({
  colors: z.array(colorValidator).optional(),
  types: z.array(typeValidator).optional(),
  subtypes: z.array(subtypeValidator).optional(),
  rarities: z.array(rarityValidator).optional(),
  keywords: z.array(keywordValidator).optional(),
  treatments: z.array(treatmentValidator).optional(),
  setIds: z.array(setIdValidator).optional(),
})

export const ValidateGetArtistsSchema = (req: Request, _res: Response, next: NextFunction) => {
  validateZodSchema(getArtistsSchema, req, next)
}
