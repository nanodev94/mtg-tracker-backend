import type { SortDir } from '@/@types/sort.dto'

export interface GetSetsWithProgressDto {
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
    progress: number
  }[]
  count: number
}

export interface GetSetsWithProgressQueryParams {
  name?: string
  page?: number
  resultsPerPage?: number
  sortField?: string
  sortDir?: keyof typeof SortDir
}
