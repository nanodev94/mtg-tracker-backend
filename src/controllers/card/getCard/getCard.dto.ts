import type { Color, Rarity } from '@prisma/client'

export interface GetCardDto {
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
}
