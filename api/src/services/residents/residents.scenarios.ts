import type { Prisma, Resident } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ResidentCreateArgs>({
  resident: {
    one: { data: { name: 'String', email: 'String7256140', year: 'String' } },
    two: { data: { name: 'String', email: 'String9271885', year: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Resident, 'resident'>
