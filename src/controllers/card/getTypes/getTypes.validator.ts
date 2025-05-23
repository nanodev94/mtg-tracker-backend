import type { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

import {
  artistValidator,
  colorValidator,
  keywordValidator,
  rarityValidator,
  setIdValidator,
  subtypeValidator,
  treatmentValidator,
} from '@/utils/customValidators'
import { validateZodSchema } from '@/utils/validation'

const getTypesSchema = z.object({
  colors: z.array(colorValidator).optional(),
  subtypes: z.array(subtypeValidator).optional(),
  rarities: z.array(rarityValidator).optional(),
  keywords: z.array(keywordValidator).optional(),
  artists: z.array(artistValidator).optional(),
  treatments: z.array(treatmentValidator).optional(),
  setIds: z.array(setIdValidator).optional(),
})

export const ValidateGetTypesSchema = (req: Request, _res: Response, next: NextFunction) => {
  validateZodSchema(getTypesSchema, req, next)
}
