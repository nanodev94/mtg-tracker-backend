import { prisma } from '@/utils/db'
import BadRequestException from '@/utils/exceptions/badRequest'

import type { AddUserCardDto } from './addUserCard.dto'

const addUserCard = async (
  req: Express.Request,
  cardId: number,
  treatment: string
): Promise<AddUserCardDto> => {
  const userId = req.authData?.userId

  if (!userId) throw new BadRequestException()

  // Update count
  const newUserCard = await prisma.userCard.upsert({
    where: {
      userId_cardId_treatment: {
        userId,
        cardId,
        treatment,
      },
    },
    create: {
      userId,
      cardId,
      treatment,
      amount: 1,
    },
    update: {
      amount: {
        increment: 1,
      },
    },
  })

  return { ...newUserCard }
}

export default addUserCard
