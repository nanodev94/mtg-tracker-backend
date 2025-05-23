import { prisma } from '@/utils/db'

import type { GetArtistsDto, GetArtistsQueryParams } from './getArtists.dto'

const getArtists = async (queryParams: GetArtistsQueryParams): Promise<GetArtistsDto> => {
  const { colors, rarities, types, subtypes, keywords, treatments, setIds } = queryParams

  const artistsRes = await prisma.card.findMany({
    select: { artist: true },
    distinct: ['artist'],
    where: {
      rarity: rarities && { in: rarities },
      colors: colors && { hasSome: colors },
      types: types && { hasSome: types },
      subtypes: subtypes && { hasSome: subtypes },
      keywords: keywords && { hasSome: keywords },
      treatments: treatments && { hasSome: treatments },
      setId: setIds && { in: setIds },
    },
    orderBy: { artist: 'asc' },
  })

  const artists = artistsRes.map(({ artist }) => artist).filter((artist) => artist !== null)

  return { artists, count: artists.length }
}

export default getArtists
