import { UiMode } from '@prisma/client'
import bcrypt from 'bcryptjs'

import { MESSAGES } from '@/constants/messages'
import { prisma } from '@/utils/db'
import BadRequestException from '@/utils/exceptions/badRequest'
import { generateJWT } from '@/utils/jwt'

import type { PostLoginBody, PostLoginDto } from './postLogin.dto'

const postLogin = async (body: PostLoginBody): Promise<PostLoginDto> => {
  const { email, password } = body

  const user = await prisma.user.findFirst({
    where: { email },
  })

  if (!user) throw new BadRequestException(MESSAGES.BAD_CREDENTIALS)

  const samePassword = bcrypt.compareSync(password, user.password)
  if (!samePassword) throw new BadRequestException(MESSAGES.BAD_CREDENTIALS)

  const token = generateJWT({
    userId: user.id,
    email: user.email,
    isBlocked: user.isBlocked ?? false,
    uiMode: user.uiMode ?? UiMode.AUTO,
    languageCode: user.languageCode,
  })

  if (!token) throw new BadRequestException(MESSAGES.SOMETHING_WENT_WRONG)

  return {
    id: user.id,
    email: user.email,
    uiMode: user.uiMode ?? UiMode.AUTO,
    languageCode: user.languageCode,
    token,
  }
}

export default postLogin
