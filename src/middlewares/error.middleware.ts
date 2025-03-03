/* eslint-disable @typescript-eslint/no-invalid-void-type */
import type { NextFunction, Request, Response } from 'express'
import { ValidateError } from 'tsoa'

import { HTTP_CODES } from '@/constants/httpCodes'
import { HTTP_REASONS } from '@/constants/httpReasons'
import { MESSAGES } from '@/constants/messages'
import HttpException from '@/utils/exceptions/httpException'

const ErrorMiddleware = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  if (error instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, error.fields)

    res.status(HTTP_CODES.UNPROCESSABLE_ENTITY).json({
      message: MESSAGES.VALIDATION_FAILED,
      details: error.message || HTTP_REASONS.UNPROCESSABLE_ENTITY,
    })
  } else if (error instanceof HttpException) {
    res.status(error.status).json({
      message: error.message,
    })
  } else if (error instanceof Error) {
    console.log(error)
    res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).json({
      message: HTTP_REASONS.INTERNAL_SERVER_ERROR,
    })
  }

  next()
}

export default ErrorMiddleware
