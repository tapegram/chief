import type { Prisma, TrackAssignment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TrackAssignmentCreateArgs>({
  trackAssignment: {
    one: {
      data: {
        schedule: { create: { name: 'String' } },
        resident: {
          create: { name: 'String', email: 'String7359039', year: 'String' },
        },
        track: {
          create: { name: 'String', updatedAt: '2023-02-20T22:49:25.995Z' },
        },
      },
    },
    two: {
      data: {
        schedule: { create: { name: 'String' } },
        resident: {
          create: { name: 'String', email: 'String9721632', year: 'String' },
        },
        track: {
          create: { name: 'String', updatedAt: '2023-02-20T22:49:25.995Z' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<TrackAssignment, 'trackAssignment'>
