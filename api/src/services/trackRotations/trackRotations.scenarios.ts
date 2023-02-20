import type { Prisma, TrackRotation } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TrackRotationCreateArgs>({
  trackRotation: {
    one: {
      data: {
        name: 'String',
        block: 2788150,
        updatedAt: '2023-02-20T22:49:13.469Z',
        track: {
          create: { name: 'String', updatedAt: '2023-02-20T22:49:13.469Z' },
        },
        rotation: {
          create: {
            name: 'String',
            length: 4593262,
            updatedAt: '2023-02-20T22:49:13.469Z',
            location: { create: { name: 'String' } },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        block: 549124,
        updatedAt: '2023-02-20T22:49:13.469Z',
        track: {
          create: { name: 'String', updatedAt: '2023-02-20T22:49:13.469Z' },
        },
        rotation: {
          create: {
            name: 'String',
            length: 9121634,
            updatedAt: '2023-02-20T22:49:13.469Z',
            location: { create: { name: 'String' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<TrackRotation, 'trackRotation'>
