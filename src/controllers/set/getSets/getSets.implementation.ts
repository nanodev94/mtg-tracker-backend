import { SortDir } from '@/@types/sort.dto'
import { prisma } from '@/utils/db'

import type { GetSetsDto, GetSetsQueryParams } from './getSets.dto'

const getSets = async (queryParams: GetSetsQueryParams): Promise<GetSetsDto> => {
  const { name, page, resultsPerPage, sortDir, sortField } = queryParams

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
    skip: page && resultsPerPage ? page * resultsPerPage : 0,
    take: resultsPerPage,
    orderBy,
  })

  return { sets, count: sets.length }
}

export default getSets
