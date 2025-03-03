import type { UiMode } from '@prisma/client'

export interface PostRegisterDto {
  id: number
  email: string
  uiMode: UiMode
  languageCode: string
}

export interface PostRegisterBody {
  email: string
  password: string
  languageCode: string
}
