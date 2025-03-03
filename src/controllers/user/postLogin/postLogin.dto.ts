import type { UiMode } from '@prisma/client'

export interface PostLoginDto {
  id: number
  email: string
  uiMode: UiMode
  languageCode: string
  token: string
}

export interface PostLoginBody {
  email: string
  password: string
}
