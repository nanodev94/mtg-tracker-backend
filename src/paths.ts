import { addAliases } from 'module-alias'
import path from 'path'

import 'module-alias/register'

addAliases({
  '@': path.join(__dirname, ''),
})
