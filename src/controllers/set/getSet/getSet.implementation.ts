import { prisma } from '@/utils/db'
import NotFoundException from '@/utils/exceptions/notFound'

import type { GetSetDto } from './getSet.dto'

const getSet = async (setId: number): Promise<GetSetDto> => {
  const set = await prisma.set.findFirst({
    where: { id: setId },
  })

  if (!set) throw new NotFoundException(`setId ${setId} not found`)

  return set
}

export default getSet
