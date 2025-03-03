import { HTTP_CODES } from '@/constants/httpCodes'
import { HTTP_REASONS } from '@/constants/httpReasons'

import HttpException from './httpException'

class InternalServerErrorException extends HttpException {
  constructor(reason?: string) {
    super(HTTP_CODES.INTERNAL_SERVER_ERROR, reason ?? HTTP_REASONS.INTERNAL_SERVER_ERROR)
  }
}

export default InternalServerErrorException
