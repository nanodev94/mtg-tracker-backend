import { HTTP_CODES } from '@/constants/httpCodes'
import { HTTP_REASONS } from '@/constants/httpReasons'

import HttpException from './httpException'

class NotAuthorizedException extends HttpException {
  constructor(reason?: string) {
    super(HTTP_CODES.UNAUTHORIZED, reason ?? HTTP_REASONS.UNAUTHORIZED)
  }
}

export default NotAuthorizedException
