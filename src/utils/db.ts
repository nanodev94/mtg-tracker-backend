import { PrismaClient } from '@prisma/client'
import chalk from 'chalk'

export const prisma = new PrismaClient()

export const dbCheckConnection = async () => {
  try {
    await prisma.$queryRaw`SELECT 1`
    console.log(chalk.yellowBright(`[DB]: 💾 DATABASE connected ✅.`))
  } catch (error) {
    console.log(chalk.redBright(`[DB]: 💾 connection error ❌.`))
  }
}
