import { HTTP_CODES } from '@/constants/httpCodes'
import { HTTP_REASONS } from '@/constants/httpReasons'

import HttpException from './httpException'

class BadRequestException extends HttpException {
  constructor(reason?: string) {
    super(HTTP_CODES.BAD_REQUEST, reason ?? HTTP_REASONS.BAD_REQUEST)
  }
}

export default BadRequestException
