import { prisma } from '@/utils/db'

import type { GetSubtypesDto, GetSubtypesQueryParams } from './getSubtypes.dto'

const getSubtypes = async (queryParams: GetSubtypesQueryParams): Promise<GetSubtypesDto> => {
  const { colors, rarities, types, keywords, artists, treatments, setIds } = queryParams

  const subtypesRes = await prisma.card.findMany({
    select: { subtypes: true },
    distinct: ['subtypes'],
    where: {
      rarity: rarities && { in: rarities },
      colors: colors && { hasSome: colors },
      types: types && { hasSome: types },
      keywords: keywords && { hasSome: keywords },
      artist: artists && { in: artists },
      treatments: treatments && { hasSome: treatments },
      setId: setIds && { in: setIds },
    },
  })

  const subtypes = [...new Set(subtypesRes.flatMap(({ subtypes }) => subtypes))].toSorted()

  return { subtypes, count: subtypes.length }
}

export default getSubtypes
