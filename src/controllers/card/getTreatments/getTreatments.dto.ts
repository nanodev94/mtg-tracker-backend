import type { Color, Rarity } from '@prisma/client'

export interface GetTreatmentsDto {
  treatments: string[]
  count: number
}

export interface GetTreatmentsQueryParams {
  colors?: Color[]
  types?: string[]
  subtypes?: string[]
  rarities?: Rarity[]
  keywords?: string[]
  artists?: string[]
  setIds?: number[]
}
