import type { Color, Rarity } from '@prisma/client'

export interface GetArtistsDto {
  artists: string[]
  count: number
}

export interface GetArtistsQueryParams {
  colors?: Color[]
  types?: string[]
  subtypes?: string[]
  rarities?: Rarity[]
  keywords?: string[]
  treatments?: string[]
  setIds?: number[]
}
