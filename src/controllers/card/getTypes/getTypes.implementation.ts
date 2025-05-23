import { prisma } from '@/utils/db'

import type { GetTypesDto, GetTypesQueryParams } from './getTypes.dto'

const getTypes = async (queryParams: GetTypesQueryParams): Promise<GetTypesDto> => {
  const { colors, rarities, subtypes, keywords, artists, treatments, setIds } = queryParams

  const typesRes = await prisma.card.findMany({
    select: { types: true },
    distinct: ['types'],
    where: {
      rarity: rarities && { in: rarities },
      colors: colors && { hasSome: colors },
      subtypes: subtypes && { hasSome: subtypes },
      keywords: keywords && { hasSome: keywords },
      artist: artists && { in: artists },
      treatments: treatments && { hasSome: treatments },
      setId: setIds && { in: setIds },
    },
  })

  const types = [...new Set(typesRes.flatMap(({ types }) => types))].toSorted()

  return { types, count: types.length }
}

export default getTypes
