/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Request } from 'express'

export const expressAuthentication = async (
  _req: Request,
  _securityName: string,
  _scopes?: string[]
) => {
  return Promise.resolve()
}
