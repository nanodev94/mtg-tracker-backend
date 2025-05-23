import { prisma } from '@/utils/db'
import NotFoundException from '@/utils/exceptions/notFound'

import type { GetCardDto } from './getCard.dto'

const getCard = async (languageCode: string, cardId: number): Promise<GetCardDto> => {
  const card = await prisma.card.findFirst({
    where: { id: cardId },
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
  })

  if (!card) throw new NotFoundException(`cardId ${cardId} not found`)

  const { cardInfoLanguages, cardAlternative, ...cardData } = card

  const minimizedCard = {
    ...cardData,
    name: cardInfoLanguages[0].name,
    description: cardInfoLanguages[0].description ?? undefined,
    lore: cardInfoLanguages[0].lore ?? undefined,
    mana: cardData.mana ?? undefined,
    rarity: cardData.rarity ?? undefined,
    isExtra: cardData.isExtra ?? undefined,
    isPromo: cardData.isPromo ?? undefined,
    isBundle: cardData.isBundle ?? undefined,
    isBuyABox: cardData.isBuyABox ?? undefined,
    isStorySpotlight: cardData.isStorySpotlight ?? undefined,
    power: cardData.power ?? undefined,
    defense: cardData.defense ?? undefined,
    loyalty: cardData.loyalty ?? undefined,
    artist: cardData.artist ?? undefined,
    copyright: cardData.copyright ?? undefined,
    colors: cardData.colors.length ? cardData.colors : undefined,
    types: cardData.types.length ? cardData.types : undefined,
    subtypes: cardData.subtypes.length ? cardData.subtypes : undefined,
    keywords: cardData.keywords.length ? cardData.keywords : undefined,
    treatments: cardData.treatments.length ? cardData.treatments : undefined,
    alternatives: cardAlternative.length
      ? cardAlternative.map(({ cardAlternativeOfId }) => cardAlternativeOfId)
      : undefined,
  }

  return minimizedCard
}

export default getCard
