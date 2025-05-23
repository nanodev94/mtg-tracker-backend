import { Color, Rarity, UiMode } from '@prisma/client'
import { z } from 'zod'

import { SortDir } from '@/@types/sort.dto'

// Pagination
export const pageValidator = z.coerce.number().int()
export const resultsPerPageValidator = z.coerce.number().int()
export const sortFieldValidator = z.string().nonempty()
export const sortDirValidator = z.nativeEnum(SortDir)

// Card
export const cardIdValidator = z.coerce.number().int().positive()
export const cardNameValidator = z.string().nonempty().max(150)
export const colorValidator = z.nativeEnum(Color)
export const typeValidator = z.string().nonempty().max(100)
export const subtypeValidator = z.string().nonempty().max(100)
export const rarityValidator = z.nativeEnum(Rarity)
export const keywordValidator = z.string().nonempty().max(100)
export const artistValidator = z.string().nonempty().max(150)
export const treatmentValidator = z.string().nonempty().max(100)

// Set
export const setIdValidator = z.coerce.number().int().positive()
export const setNameValidator = z.string().nonempty().max(100)

// User
export const emailValidator = z.string().nonempty().email().max(150)
export const passwordValidator = z.string().nonempty().max(150)
export const languageCodeValidator = z.string().nonempty().max(2)
export const uiModeValidator = z.nativeEnum(UiMode)
