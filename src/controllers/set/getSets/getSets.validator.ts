import type { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

import {
  pageValidator,
  resultsPerPageValidator,
  setNameValidator,
  sortDirValidator,
  sortFieldValidator,
} from '@/utils/customValidators'
import { validateZodSchema } from '@/utils/validation'

const getSetsSchema = z.object({
  name: setNameValidator.optional(),
  page: pageValidator.optional(),
  resultsPerPage: resultsPerPageValidator.optional(),
  sortField: sortFieldValidator.optional(),
  sortDir: sortDirValidator.optional(),
})

export const ValidateGetSetsSchema = (req: Request, _res: Response, next: NextFunction) => {
  validateZodSchema(getSetsSchema, req, next)
}
