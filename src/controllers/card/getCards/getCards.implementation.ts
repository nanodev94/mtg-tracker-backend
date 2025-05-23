import { SortDir } from '@/@types/sort.dto'
import { prisma } from '@/utils/db'

import type { GetCardsDto, GetCardsQueryParams } from './getCards.dto'

const getCards = async (
  languageCode: string,
  queryParams: GetCardsQueryParams
): Promise<GetCardsDto> => {
  const {
    name,
    colors,
    rarities,
    types,
    subtypes,
    keywords,
    artists,
    treatments,
    setIds,
    page,
    resultsPerPage,
    sortField,
    sortDir,
  } = queryParams

  const orderBy: Record<string, string> = {}
  if (sortField) {
    orderBy[sortField] = sortDir ?? SortDir.ASC
  }

  const cards = await prisma.card.findMany({
    where: {
      rarity: rarities && { in: rarities },
      cardInfoLanguages: name
        ? {
            some: {
              languageCode,
              name: {
                contains: name,
                mode: 'insensitive',
              },
            },
          }
        : undefined,
      colors: colors && { hasSome: colors },
      types: types && { hasSome: types },
      subtypes: subtypes && { hasSome: subtypes },
      keywords: keywords && { hasSome: keywords },
      artist: artists && { in: artists },
      treatments: treatments && { hasSome: treatments },
      setId: setIds && { in: setIds },
    },
    include: {
      cardInfoLanguages: {
        where: { languageCode },
        select: {
          name: true,
          description: true,
          lore: true,
        },
      },
      cardAlternative: true,
    },
    skip: page && resultsPerPage ? page * resultsPerPage : 0,
    take: resultsPerPage,
    orderBy,
  })

  const minimizedCards = cards.map(({ cardInfoLanguages, cardAlternative, ...card }) => ({
    ...card,
    name: cardInfoLanguages[0].name,
    description: cardInfoLanguages[0].description ?? undefined,
    lore: cardInfoLanguages[0].lore ?? undefined,
    mana: card.mana ?? undefined,
    rarity: card.rarity ?? undefined,
    isExtra: card.isExtra ?? undefined,
    isPromo: card.isPromo ?? undefined,
    isBundle: card.isBundle ?? undefined,
    isBuyABox: card.isBuyABox ?? undefined,
    isStorySpotlight: card.isStorySpotlight ?? undefined,
    power: card.power ?? undefined,
    defense: card.defense ?? undefined,
    loyalty: card.loyalty ?? undefined,
    artist: card.artist ?? undefined,
    copyright: card.copyright ?? undefined,
    colors: card.colors.length ? card.colors : undefined,
    types: card.types.length ? card.types : undefined,
    subtypes: card.subtypes.length ? card.subtypes : undefined,
    keywords: card.keywords.length ? card.keywords : undefined,
    treatments: card.treatments.length ? card.treatments : undefined,
    alternatives: cardAlternative.length
      ? cardAlternative.map(({ cardAlternativeOfId }) => cardAlternativeOfId)
      : undefined,
  }))

  return { cards: minimizedCards, count: minimizedCards.length }
}

export default getCards
