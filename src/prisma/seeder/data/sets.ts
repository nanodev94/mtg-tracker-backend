import { Color, PrismaClient, Rarity } from '@prisma/client'
import fs from 'fs'
import { z } from 'zod'

import { LANGUAGES } from './languages'

const prisma = new PrismaClient()

const setSchema = z.object({
  code: z.string().max(20),
  name: z.string().max(100),
  isCommander: z.coerce.boolean(),
  artCardsCount: z.coerce.number().int().positive(),
  tokenCardsCount: z.coerce.number().int().positive(),
  blackCardsCount: z.coerce.number().int().positive(),
  whiteCardsCount: z.coerce.number().int().positive(),
  redCardsCount: z.coerce.number().int().positive(),
  greenCardsCount: z.coerce.number().int().positive(),
  blueCardsCount: z.coerce.number().int().positive(),
  colorlessCardsCount: z.coerce.number().int().positive(),
  landCardsCount: z.coerce.number().int().positive(),
  commonCardsCount: z.coerce.number().int().positive(),
  uncommonCardsCount: z.coerce.number().int().positive(),
  rareCardsCount: z.coerce.number().int().positive(),
  mythicCardsCount: z.coerce.number().int().positive(),
  totalCards: z.coerce.number().int().positive(),
  extraCards: z.coerce.number().int().positive(),
  releasedAt: z.string().datetime(),
  cards: z.array(
    z.object({
      setNumber: z.coerce.number().int().positive(),
      colors: z.array(z.nativeEnum(Color)).optional(),
      mana: z.string().max(100).optional(),
      name: z.object({
        en: z.string().max(150),
        es: z.string().max(150),
      }),
      description: z
        .object({
          en: z.string().max(2000),
          es: z.string().max(2000),
        })
        .optional(),
      lore: z
        .object({
          en: z.string().max(2000),
          es: z.string().max(2000),
        })
        .optional(),
      types: z.array(z.string().max(100)).optional(),
      subtypes: z.array(z.string().max(100)).optional(),
      rarity: z.nativeEnum(Rarity).optional(),
      isExtra: z.coerce.boolean().optional(),
      isPromo: z.coerce.boolean().optional(),
      isBundle: z.coerce.boolean().optional(),
      isBuyABox: z.coerce.boolean().optional(),
      isStorySpotlight: z.coerce.boolean().optional(),
      keywords: z.array(z.string().max(100)).optional(),
      power: z.string().max(5).optional(),
      defense: z.string().max(5).optional(),
      loyalty: z.string().max(5).optional(),
      artist: z.string().max(150).optional(),
      copyright: z.string().max(150).optional(),
      treatments: z.array(z.string().max(100)).optional(),
      alternatives: z.array(z.coerce.number().int()).optional(),
      reprints: z
        .array(
          z.object({
            setCode: z.string().max(20),
            setNumber: z.coerce.number().int().positive(),
          })
        )
        .optional(),
    })
  ),
})

type Set = z.infer<typeof setSchema>

const SETS = fs.readdirSync('./src/prisma/seeder/data/sets').map((file) => {
  const fileData = fs.readFileSync(`./src/prisma/seeder/data/sets/${file}`)
  const json: Set = JSON.parse(fileData.toString())
  setSchema.parse(json)
  return json
})

export const loadSets = async () =>
  prisma.$transaction(
    async (tx) => {
      await Promise.all(
        SETS.map(async ({ cards, ...setData }) => {
          const set = await tx.set.findFirst({
            where: { code: setData.code },
          })

          // Upsert set data
          const newSet = await tx.set.upsert({
            where: { id: set?.id ?? -1 },
            create: { ...setData },
            update: { ...setData },
          })

          // Upsert cards data
          await Promise.all(
            cards.map(
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              async ({ name, description, lore, alternatives, reprints, ...generalData }) => {
                const card = await tx.card.findFirst({
                  where: {
                    setId: newSet.id,
                    setNumber: generalData.setNumber,
                    types: { equals: generalData.types },
                  },
                })

                // Card general data
                const newCard = await tx.card.upsert({
                  where: { id: card?.id ?? -1 },
                  create: {
                    ...generalData,
                    setId: newSet.id,
                  },
                  update: { ...generalData },
                })

                // Card language info
                await Promise.all(
                  LANGUAGES.map(({ code }) => {
                    const languageCode = code as 'en' | 'es'
                    const languageData = {
                      name: name[languageCode],
                      description: description?.[languageCode],
                      lore: lore?.[languageCode],
                    }

                    return tx.cardInfoLanguage.upsert({
                      where: { cardId_languageCode: { cardId: newCard.id, languageCode } },
                      create: {
                        ...languageData,
                        cardId: newCard.id,
                        languageCode,
                      },
                      update: { ...languageData },
                    })
                  })
                )

                return 1
              }
            )
          )

          // Upsert alternatives and reprints
          await Promise.all(
            cards.map(async ({ alternatives, reprints, setNumber, types }) => {
              if (alternatives || reprints) {
                const card1 = await tx.card.findFirst({
                  where: {
                    setId: newSet.id,
                    setNumber,
                    types: { equals: types },
                  },
                })

                if (!card1)
                  throw Error(`Card with set number ${setNumber} not found in set ${newSet.id}`)

                // Alternatives
                if (alternatives) {
                  const alternativeIds: number[] = []
                  await Promise.all(
                    alternatives.map(async (alternativeSetNumber) => {
                      const card2 = await tx.card.findFirst({
                        where: {
                          setId: newSet.id,
                          setNumber: alternativeSetNumber,
                          NOT: {
                            types: {
                              hasSome: ['TOKEN', 'ART'],
                            },
                          },
                        },
                      })

                      if (!card2)
                        throw Error(
                          `Card with set number ${alternativeSetNumber} not found in set ${newSet.id}`
                        )

                      alternativeIds.push(card2.id)

                      return 1
                    })
                  )

                  await tx.cardAlternative.deleteMany({
                    where: {
                      cardAlternativeOfId: card1.id,
                      cardAlternativeId: {
                        not: {
                          in: alternativeIds,
                        },
                      },
                    },
                  })

                  await tx.cardAlternative.createMany({
                    data: alternativeIds.map((cardAlternativeId) => ({
                      cardAlternativeOfId: card1.id,
                      cardAlternativeId,
                    })),
                    skipDuplicates: true,
                  })
                }

                // Reprints
                if (reprints) {
                  // TODO: reprints
                }
              }

              return 1
            })
          )

          return 1
        })
      )
    },
    {
      timeout: 600000,
    }
  )
