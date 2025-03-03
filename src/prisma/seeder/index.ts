import { PrismaClient } from '@prisma/client'

import { loadLanguages } from './data/languages'
import { loadSets } from './data/sets'

const prisma = new PrismaClient()

async function main() {
  await loadLanguages()
  await loadSets()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
  })
