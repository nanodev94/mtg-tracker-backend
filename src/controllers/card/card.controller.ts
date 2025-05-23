import { Controller, Get, Middlewares, Path, Queries, Route, Tags } from 'tsoa'

import { GetArtistsQueryParams } from './getArtists/getArtists.dto'
import getArtists from './getArtists/getArtists.implementation'
import { ValidateGetArtistsSchema } from './getArtists/getArtists.validator'
import getCard from './getCard/getCard.implementation'
import { GetCardsQueryParams } from './getCards/getCards.dto'
import getCards from './getCards/getCards.implementation'
import { ValidateGetCardsSchema } from './getCards/getCards.validator'
import { GetKeywordsQueryParams } from './getKeywords/getKeywords.dto'
import getKeywords from './getKeywords/getKeywords.implementation'
import { ValidateGetKeywordsSchema } from './getKeywords/getKeywords.validator'
import { GetSubtypesQueryParams } from './getSubtypes/getSubtypes.dto'
import getSubtypes from './getSubtypes/getSubtypes.implementation'
import { ValidateGetSubtypesSchema } from './getSubtypes/getSubtypes.validator'
import { GetTreatmentsQueryParams } from './getTreatments/getTreatments.dto'
import getTreatments from './getTreatments/getTreatments.implementation'
import { ValidateGetTreatmentsSchema } from './getTreatments/getTreatments.validator'
import { GetTypesQueryParams } from './getTypes/getTypes.dto'
import getTypes from './getTypes/getTypes.implementation'
import { ValidateGetTypesSchema } from './getTypes/getTypes.validator'

@Route('/cards')
@Tags('Card')
export class CardController extends Controller {
  /**
   * Get list of artists by filters
   */
  @Get('/artists')
  @Middlewares([ValidateGetArtistsSchema])
  async getArtists(@Queries() queryParams: GetArtistsQueryParams) {
    return getArtists(queryParams)
  }

  /**
   * Get list of types by filters
   */
  @Get('/types')
  @Middlewares([ValidateGetTypesSchema])
  async getTypes(@Queries() queryParams: GetTypesQueryParams) {
    return getTypes(queryParams)
  }

  /**
   * Get list of subtypes by filters
   */
  @Get('/subtypes')
  @Middlewares([ValidateGetSubtypesSchema])
  async getSubtypes(@Queries() queryParams: GetSubtypesQueryParams) {
    return getSubtypes(queryParams)
  }

  /**
   * Get list of keywords by filters
   */
  @Get('/keywords')
  @Middlewares([ValidateGetKeywordsSchema])
  async getKeywords(@Queries() queryParams: GetKeywordsQueryParams) {
    return getKeywords(queryParams)
  }

  /**
   * Get list of treatments by filters
   */
  @Get('/treatments')
  @Middlewares([ValidateGetTreatmentsSchema])
  async getTreatments(@Queries() queryParams: GetTreatmentsQueryParams) {
    return getTreatments(queryParams)
  }

  /**
   * Get cards by filters
   */
  @Get('/:languageCode')
  @Middlewares([ValidateGetCardsSchema])
  async getCards(@Path() languageCode: string, @Queries() queryParams: GetCardsQueryParams) {
    return getCards(languageCode, queryParams)
  }

  /**
   * Get card info by id
   */
  @Get('/:languageCode/:cardId')
  async getCard(@Path() languageCode: string, @Path() cardId: number) {
    return getCard(languageCode, cardId)
  }
}
