/* eslint-disable @typescript-eslint/no-invalid-void-type */
import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import type { TokenDto } from '@/@types/token.dto'
import { HTTP_CODES } from '@/constants/httpCodes'
import { HTTP_REASONS } from '@/constants/httpReasons'
import { MESSAGES } from '@/constants/messages'

const JWTMiddleware = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { JWT_SECRET } = process.env
  const auth = req.header('Authorization')

  if (!auth || !JWT_SECRET) {
    res.status(HTTP_CODES.UNAUTHORIZED).json({
      message: MESSAGES.TOKEN_NO,
      details: HTTP_REASONS.UNAUTHORIZED,
    })
  } else {
    try {
      const token = auth.split(' ')[1]
      const jwtData = jwt.verify(token, JWT_SECRET) as TokenDto
      req.authData = { ...jwtData }
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        res.status(HTTP_CODES.UNAUTHORIZED).json({
          message: MESSAGES.TOKEN_EXPIRED,
          details: HTTP_REASONS.UNAUTHORIZED,
        })
      } else {
        res.status(HTTP_CODES.UNAUTHORIZED).json({
          message: MESSAGES.TOKEN_INVALID,
          details: HTTP_REASONS.UNAUTHORIZED,
        })
      }
    }
  }

  next()
}

export default JWTMiddleware
