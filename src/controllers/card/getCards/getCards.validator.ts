import type { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

import {
  artistValidator,
  cardNameValidator,
  colorValidator,
  keywordValidator,
  pageValidator,
  rarityValidator,
  resultsPerPageValidator,
  setIdValidator,
  sortDirValidator,
  sortFieldValidator,
  subtypeValidator,
  treatmentValidator,
  typeValidator,
} from '@/utils/customValidators'
import { validateZodSchema } from '@/utils/validation'

const getCardsSchema = z.object({
  name: cardNameValidator.optional(),
  colors: z.array(colorValidator).optional(),
  types: z.array(typeValidator).optional(),
  subtypes: z.array(subtypeValidator).optional(),
  rarities: z.array(rarityValidator).optional(),
  keywords: z.array(keywordValidator).optional(),
  artists: z.array(artistValidator).optional(),
  treatments: z.array(treatmentValidator).optional(),
  setIds: z.array(setIdValidator).optional(),
  page: pageValidator.optional(),
  resultsPerPage: resultsPerPageValidator.optional(),
  sortField: sortFieldValidator.optional(),
  sortDir: sortDirValidator.optional(),
})

export const ValidateGetCardsSchema = (req: Request, _res: Response, next: NextFunction) => {
  validateZodSchema(getCardsSchema, req, next)
}
