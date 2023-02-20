import type { Prisma, Schedule } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ScheduleCreateArgs>({
  schedule: {
    one: { data: { name: 'String' } },
    two: { data: { name: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Schedule, 'schedule'>
