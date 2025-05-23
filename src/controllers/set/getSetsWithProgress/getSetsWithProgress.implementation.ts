import { SortDir } from '@/@types/sort.dto'
import { prisma } from '@/utils/db'
import BadRequestException from '@/utils/exceptions/badRequest'

import type {
  GetSetsWithProgressDto,
  GetSetsWithProgressQueryParams,
} from './getSetsWithProgress.dto'

const getSetsWithProgress = async (
  req: Express.Request,
  queryParams: GetSetsWithProgressQueryParams
): Promise<GetSetsWithProgressDto> => {
  const userId = req.authData?.userId
  const { name, page, resultsPerPage, sortDir, sortField } = queryParams

  if (!userId) throw new BadRequestException()

  const orderBy: Record<string, string> = {}
  if (sortField) {
    orderBy[sortField] = sortDir ?? SortDir.ASC
  }

  const sets = await prisma.set.findMany({
    where: {
      name: name && {
        contains: name,
        mode: 'insensitive',
      },
    },
    include: {
      cards: {
        include: {
          userCards: {
            where: { userId },
            take: 1,
          },
        },
      },
    },
    skip: page && resultsPerPage ? page * resultsPerPage : 0,
    take: resultsPerPage,
    orderBy,
  })

  const setsFull = sets.map(({ cards, ...setInfo }) => ({
    ...setInfo,
    progress: cards.filter((card) => card.userCards.length !== 0).length / setInfo.totalCards,
  }))

  return { sets: setsFull, count: setsFull.length }
}

export default getSetsWithProgress
