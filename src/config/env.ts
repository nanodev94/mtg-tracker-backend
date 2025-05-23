import { z } from 'zod'

export enum ENVIRONMENTS {
  development = 'development',
  production = 'production',
}

export enum ENABLED {
  OFF = '0',
  ON = '1',
}

export const envVars = z.object({
  NODE_ENV: z.nativeEnum(ENVIRONMENTS),
  BASE_URL: z.string(),
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number(),
  HTTPS_MODE: z.nativeEnum(ENABLED),
  BCRYPT_SALT_ROUNDS: z.coerce.number(),
  JWT_SECRET: z.string(),
})
