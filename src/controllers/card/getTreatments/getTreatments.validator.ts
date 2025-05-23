import type { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

import {
  artistValidator,
  colorValidator,
  keywordValidator,
  rarityValidator,
  setIdValidator,
  subtypeValidator,
  typeValidator,
} from '@/utils/customValidators'
import { validateZodSchema } from '@/utils/validation'

const getTreatmentsSchema = z.object({
  colors: z.array(colorValidator).optional(),
  types: z.array(typeValidator).optional(),
  subtypes: z.array(subtypeValidator).optional(),
  rarities: z.array(rarityValidator).optional(),
  keywords: z.array(keywordValidator).optional(),
  artists: z.array(artistValidator).optional(),
  setIds: z.array(setIdValidator).optional(),
})

export const ValidateGetTreatmentsSchema = (req: Request, _res: Response, next: NextFunction) => {
  validateZodSchema(getTreatmentsSchema, req, next)
}
