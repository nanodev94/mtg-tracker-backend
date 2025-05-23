import type { SortDir } from '@/@types/sort.dto'

export interface GetSetsDto {
  sets: {
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
  }[]
  count: number
}

export interface GetSetsQueryParams {
  name?: string
  page?: number
  resultsPerPage?: number
  sortField?: string
  sortDir?: keyof typeof SortDir
}
