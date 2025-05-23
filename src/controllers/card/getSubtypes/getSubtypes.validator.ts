import type { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

import {
  artistValidator,
  colorValidator,
  keywordValidator,
  rarityValidator,
  setIdValidator,
  treatmentValidator,
  typeValidator,
} from '@/utils/customValidators'
import { validateZodSchema } from '@/utils/validation'

const getSubtypesSchema = z.object({
  colors: z.array(colorValidator).optional(),
  types: z.array(typeValidator).optional(),
  rarities: z.array(rarityValidator).optional(),
  keywords: z.array(keywordValidator).optional(),
  artists: z.array(artistValidator).optional(),
  treatments: z.array(treatmentValidator).optional(),
  setIds: z.array(setIdValidator).optional(),
})

export const ValidateGetSubtypesSchema = (req: Request, _res: Response, next: NextFunction) => {
  validateZodSchema(getSubtypesSchema, req, next)
}
