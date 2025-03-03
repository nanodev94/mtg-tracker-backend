import { prisma } from '@/utils/db'
import BadRequestException from '@/utils/exceptions/badRequest'

import type { RemoveUserCardDto } from './removeUserCard.dto'

const removeUserCard = async (
  req: Express.Request,
  cardId: number,
  treatment: string
): Promise<RemoveUserCardDto> => {
  const userId = req.authData?.userId

  if (!userId) throw new BadRequestException()

  // Check if exists
  const userCard = await prisma.userCard.findFirst({
    where: { userId, cardId, treatment },
  })

  if (!userCard) {
    return {
      userId,
      cardId,
      treatment,
      amount: 0,
    }
  }

  // Update count
  const newUserCard = await prisma.userCard.update({
    where: {
      userId_cardId_treatment: { userId, cardId, treatment },
    },
    data: {
      amount: {
        decrement: 1,
      },
    },
  })

  if (newUserCard.amount === 0) {
    await prisma.userCard.delete({
      where: {
        userId_cardId_treatment: { userId, cardId, treatment },
      },
    })
  }

  return { ...newUserCard }
}

export default removeUserCard
