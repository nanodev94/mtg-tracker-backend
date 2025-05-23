import {
  Body,
  Controller,
  Get,
  Middlewares,
  Path,
  Post,
  Put,
  Queries,
  Request,
  Route,
  Security,
  Tags,
} from 'tsoa'

import JWTMiddleware from '@/middlewares/jwt.middleware'

import addUserCard from './addUserCard/addUserCard.implementation'
import { GetUserCardsQueryParams } from './getUserCards/getUserCards.dto'
import getUserCards from './getUserCards/getUserCards.implementation'
import { ValidateGetUserCardsSchema } from './getUserCards/getUserCards.validator'
import { PostLoginBody } from './postLogin/postLogin.dto'
import postLogin from './postLogin/postLogin.implementation'
import { ValidatePostLoginSchema } from './postLogin/postLogin.validator'
import { PostRegisterBody } from './postRegister/postRegister.dto'
import postRegister from './postRegister/postRegister.implementation'
import { ValidatePostRegisterSchema } from './postRegister/postRegister.validator'
import { PutUserBody } from './putUser/putUser.dto'
import putUser from './putUser/putUser.implementation'
import { ValidatePutUserSchema } from './putUser/putUser.validator'
import removeUserCard from './removeUserCard/removeUserCard.implementation'

@Route('/users')
@Tags('User')
export class UserController extends Controller {
  /**
   * Update user info
   */
  @Put('/')
  @Security('jwt')
  @Middlewares([JWTMiddleware, ValidatePutUserSchema])
  async putUser(@Request() req: Express.Request, @Body() body: PutUserBody) {
    return putUser(req, body)
  }

  /**
   * Create account
   */
  @Post('/register')
  @Middlewares([ValidatePostRegisterSchema])
  async postRegister(@Body() body: PostRegisterBody) {
    return postRegister(body)
  }

  /**
   * Check login
   */
  @Post('/login')
  @Middlewares([ValidatePostLoginSchema])
  async postLogin(@Body() body: PostLoginBody) {
    return postLogin(body)
  }

  /**
   * Get user collection
   */
  @Get('/cards')
  @Security('jwt')
  @Middlewares([JWTMiddleware, ValidateGetUserCardsSchema])
  async getUserCards(
    @Request() req: Express.Request,
    @Queries() queryParams: GetUserCardsQueryParams
  ) {
    return getUserCards(req, queryParams)
  }

  /**
   * Add card to user collection
   */
  @Put('/addCard/:cardId/:treatment')
  @Security('jwt')
  @Middlewares([JWTMiddleware])
  async addUserCard(
    @Request() req: Express.Request,
    @Path() cardId: number,
    @Path() treatment: string
  ) {
    return addUserCard(req, cardId, treatment)
  }

  /**
   * Remove card from user collection
   */
  @Put('/removeCard/:cardId/:treatment')
  @Security('jwt')
  @Middlewares([JWTMiddleware])
  async removeUserCard(
    @Request() req: Express.Request,
    @Path() cardId: number,
    @Path() treatment: string
  ) {
    return removeUserCard(req, cardId, treatment)
  }
}
