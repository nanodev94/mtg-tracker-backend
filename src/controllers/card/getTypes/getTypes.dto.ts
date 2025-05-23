import type { Color, Rarity } from '@prisma/client'

export interface GetTypesDto {
  types: string[]
  count: number
}

export interface GetTypesQueryParams {
  colors?: Color[]
  subtypes?: string[]
  rarities?: Rarity[]
  keywords?: string[]
  artists?: string[]
  treatments?: string[]
  setIds?: number[]
}
