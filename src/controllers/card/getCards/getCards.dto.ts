import type { Color, Rarity } from '@prisma/client'

import type { SortDir } from '@/@types/sort.dto'

export interface GetCardsDto {
  cards: {
    id: number
    setId: number
    name: string
    description?: string
    lore?: string
    colors?: Color[]
    mana?: string
    types?: string[]
    subtypes?: string[]
    rarity?: Rarity
    isExtra?: boolean
    isPromo?: boolean
    isBundle?: boolean
    isBuyABox?: boolean
    isStorySpotlight?: boolean
    keywords?: string[]
    power?: string
    defense?: string
    loyalty?: string
    artist?: string
    copyright?: string
    treatments?: string[]
    alternatives?: number[]
  }[]
  count: number
}

export interface GetCardsQueryParams {
  name?: string
  colors?: Color[]
  types?: string[]
  subtypes?: string[]
  rarities?: Rarity[]
  keywords?: string[]
  artists?: string[]
  treatments?: string[]
  setIds?: number[]
  page?: number
  resultsPerPage?: number
  sortField?: string
  sortDir?: keyof typeof SortDir
}
