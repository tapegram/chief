import type { Prisma, Rotation } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RotationCreateArgs>({
  rotation: {
    one: {
      data: {
        name: 'String',
        length: 7473342,
        updatedAt: '2023-02-20T22:49:35.851Z',
        location: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        name: 'String',
        length: 9752504,
        updatedAt: '2023-02-20T22:49:35.851Z',
        location: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Rotation, 'rotation'>
