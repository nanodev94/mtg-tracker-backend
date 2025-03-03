export interface GetSetDto {
  id: number
  code: string
  name: string
  isCommander: boolean
  artCardsCount: number
  tokenCardsCount: number
  blackCardsCount: number
  whiteCardsCount: number
  redCardsCount: number
  greenCardsCount: number
  blueCardsCount: number
  colorlessCardsCount: number
  landCardsCount: number
  commonCardsCount: number
  uncommonCardsCount: number
  rareCardsCount: number
  mythicCardsCount: number
  totalCards: number
  extraCards: number
  releasedAt: Date
}
