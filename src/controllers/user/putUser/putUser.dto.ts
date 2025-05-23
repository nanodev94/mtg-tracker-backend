import type { UiMode } from '@prisma/client'

export interface PutUserDto {
  languageCode: string
  uiMode: UiMode
}

export interface PutUserBody {
  languageCode?: string
  uiMode?: UiMode
}
