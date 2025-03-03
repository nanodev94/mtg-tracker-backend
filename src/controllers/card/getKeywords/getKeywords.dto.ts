import type { Color, Rarity } from '@prisma/client'

export interface GetKeywordsDto {
  keywords: string[]
  count: number
}

export interface GetKeywordsQueryParams {
  colors?: Color[]
  types?: string[]
  subtypes?: string[]
  rarities?: Rarity[]
  artists?: string[]
  treatments?: string[]
  setIds?: number[]
}
