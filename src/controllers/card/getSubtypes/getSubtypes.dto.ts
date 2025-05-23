import type { Color, Rarity } from '@prisma/client'

export interface GetSubtypesDto {
  subtypes: string[]
  count: number
}

export interface GetSubtypesQueryParams {
  colors?: Color[]
  types?: string[]
  rarities?: Rarity[]
  keywords?: string[]
  artists?: string[]
  treatments?: string[]
  setIds?: number[]
}
