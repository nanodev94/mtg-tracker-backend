// Augmented Express Request based on the data that are aggregated from Token via middlewares

import type { TokenDto } from './token.dto'

declare global {
  namespace Express {
    export interface Request {
      authData?: TokenDto
    }
  }
}
