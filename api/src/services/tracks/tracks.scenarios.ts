import type { Prisma, Track } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TrackCreateArgs>({
  track: {
    one: { data: { name: 'String', updatedAt: '2023-02-20T22:49:05.538Z' } },
    two: { data: { name: 'String', updatedAt: '2023-02-20T22:49:05.538Z' } },
  },
})

export type StandardScenario = ScenarioData<Track, 'track'>
