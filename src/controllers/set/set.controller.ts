import { Controller, Get, Middlewares, Path, Queries, Request, Route, Security, Tags } from 'tsoa'

import JWTMiddleware from '@/middlewares/jwt.middleware'

import getSet from './getSet/getSet.implementation'
import { GetSetsQueryParams } from './getSets/getSets.dto'
import getSets from './getSets/getSets.implementation'
import { ValidateGetSetsSchema } from './getSets/getSets.validator'
import getSetsWithProgress from './getSetsWithProgress/getSetsWithProgress.implementation'
import { ValidateGetSetsWithProgressSchema } from './getSetsWithProgress/getSetsWithProgress.validator'

@Route('/sets')
@Tags('Set')
export class SetController extends Controller {
  /**
   * Get sets with progress by filters
   */
  @Get('/withProgress')
  @Security('jwt')
  @Middlewares([JWTMiddleware, ValidateGetSetsWithProgressSchema])
  async getSetsWithProgress(
    @Request() req: Express.Request,
    @Queries() queryParams: GetSetsQueryParams
  ) {
    return getSetsWithProgress(req, queryParams)
  }

  /**
   * Get sets by filters
   */
  @Get('/')
  @Middlewares([ValidateGetSetsSchema])
  async getSets(@Queries() queryParams: GetSetsQueryParams) {
    return getSets(queryParams)
  }

  /**
   * Get set by id
   */
  @Get('/:setId')
  async getSet(@Path() setId: number) {
    return getSet(setId)
  }
}
