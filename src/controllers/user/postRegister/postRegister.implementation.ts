import { UiMode } from '@prisma/client'
import bcrypt from 'bcryptjs'

import { prisma } from '@/utils/db'
import BadRequestException from '@/utils/exceptions/badRequest'

import type { PostRegisterBody, PostRegisterDto } from './postRegister.dto'

const postRegister = async (body: PostRegisterBody): Promise<PostRegisterDto> => {
  const { email, password, languageCode } = body

  const user = await prisma.user.findFirst({
    where: { email },
  })

  if (user) throw new BadRequestException(`User with email ${email} already exists`)

  const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT_ROUNDS ?? '10'))
  const hashedPassword = bcrypt.hashSync(password, salt)

  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      languageCode,
    },
  })

  return {
    id: newUser.id,
    email: newUser.email,
    uiMode: newUser.uiMode ?? UiMode.AUTO,
    languageCode: newUser.languageCode,
  }
}

export default postRegister
