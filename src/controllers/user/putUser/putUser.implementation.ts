import { UiMode } from '@prisma/client'

import { prisma } from '@/utils/db'
import BadRequestException from '@/utils/exceptions/badRequest'

import type { PutUserBody, PutUserDto } from './putUser.dto'

const putUser = async (req: Express.Request, body: PutUserBody): Promise<PutUserDto> => {
  const userId = req.authData?.userId
  const { languageCode, uiMode } = body

  if (!userId) throw new BadRequestException()

  const newUser = await prisma.user.update({
    where: { id: userId },
    data: { languageCode, uiMode },
  })

  return {
    uiMode: newUser.uiMode ?? UiMode.AUTO,
    languageCode: newUser.languageCode,
  }
}

export default putUser
