import { prisma } from '@/utils/db'

import type { GetKeywordsDto, GetKeywordsQueryParams } from './getKeywords.dto'

const getKeywords = async (queryParams: GetKeywordsQueryParams): Promise<GetKeywordsDto> => {
  const { colors, rarities, types, subtypes, artists, treatments, setIds } = queryParams

  const keywordsRes = await prisma.card.findMany({
    select: { keywords: true },
    distinct: ['keywords'],
    where: {
      rarity: rarities && { in: rarities },
      colors: colors && { hasSome: colors },
      types: types && { hasSome: types },
      subtypes: subtypes && { hasSome: subtypes },
      artist: artists && { in: artists },
      treatments: treatments && { hasSome: treatments },
      setId: setIds && { in: setIds },
    },
  })

  const keywords = [...new Set(keywordsRes.flatMap(({ keywords }) => keywords))].toSorted()

  return { keywords, count: keywords.length }
}

export default getKeywords
