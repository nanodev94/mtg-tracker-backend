import { prisma } from '@/utils/db'
import BadRequestException from '@/utils/exceptions/badRequest'

import type { GetUserCardsDto, GetUserCardsQueryParams } from './getUserCards.dto'

const getUserCards = async (
  req: Express.Request,
  queryParams: GetUserCardsQueryParams
): Promise<GetUserCardsDto> => {
  const userId = req.authData?.userId
  const { setIds, cardIds, treatments } = queryParams

  if (!userId) throw new BadRequestException()

  const userCards = await prisma.userCard.findMany({
    where: {
      userId,
      card: setIds && { setId: { in: setIds } },
      cardId: cardIds && { in: cardIds },
      treatment: treatments && { in: treatments },
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cards = userCards.map(({ userId, ...userCard }) => userCard)

  return { cards, count: cards.length }
}

export default getUserCards
