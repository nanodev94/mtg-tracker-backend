import { HTTP_CODES } from '@/constants/httpCodes'
import { HTTP_REASONS } from '@/constants/httpReasons'

import HttpException from './httpException'

class NotFoundException extends HttpException {
  constructor(reason?: string) {
    super(HTTP_CODES.NOT_FOUND, reason ?? HTTP_REASONS.NOT_FOUND)
  }
}

export default NotFoundException
