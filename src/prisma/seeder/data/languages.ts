import type { Prisma } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const LANGUAGES: Prisma.LanguageCreateInput[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
]

export const loadLanguages = async () =>
  Promise.all(
    LANGUAGES.map((language) =>
      prisma.language.upsert({
        where: { code: language.code },
        update: { name: language.name },
        create: { ...language },
      })
    )
  )
