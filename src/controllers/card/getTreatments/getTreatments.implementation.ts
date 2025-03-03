import { prisma } from '@/utils/db'

import type { GetTreatmentsDto, GetTreatmentsQueryParams } from './getTreatments.dto'

const getTreatments = async (queryParams: GetTreatmentsQueryParams): Promise<GetTreatmentsDto> => {
  const { colors, rarities, types, subtypes, keywords, artists, setIds } = queryParams

  const treatmentsRes = await prisma.card.findMany({
    select: { treatments: true },
    distinct: ['treatments'],
    where: {
      rarity: rarities && { in: rarities },
      colors: colors && { hasSome: colors },
      types: types && { hasSome: types },
      subtypes: subtypes && { hasSome: subtypes },
      keywords: keywords && { hasSome: keywords },
      artist: artists && { in: artists },
      setId: setIds && { in: setIds },
    },
  })

  const treatments = [...new Set(treatmentsRes.flatMap(({ treatments }) => treatments))].toSorted()

  return { treatments, count: treatments.length }
}

export default getTreatments
