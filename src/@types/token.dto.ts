import type { UiMode } from '@prisma/client'

export interface TokenDto {
  userId: number
  email: string
  isBlocked: boolean
  languageCode: string
  uiMode: UiMode
}
