import jwt from 'jsonwebtoken'

import type { TokenDto } from '@/@types/token.dto'

export const generateJWT = (tokenData: TokenDto) => {
  const { JWT_SECRET } = process.env

  if (!JWT_SECRET) return undefined

  const token: string = jwt.sign(tokenData, JWT_SECRET, { expiresIn: '7d' })

  return token
}
