import type { TrackRotation } from '@prisma/client'

import {
  trackRotations,
  trackRotation,
  createTrackRotation,
  updateTrackRotation,
  deleteTrackRotation,
} from './trackRotations'
import type { StandardScenario } from './trackRotations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('trackRotations', () => {
  scenario('returns all trackRotations', async (scenario: StandardScenario) => {
    const result = await trackRotations()

    expect(result.length).toEqual(Object.keys(scenario.trackRotation).length)
  })

  scenario(
    'returns a single trackRotation',
    async (scenario: StandardScenario) => {
      const result = await trackRotation({ id: scenario.trackRotation.one.id })

      expect(result).toEqual(scenario.trackRotation.one)
    }
  )

  scenario('creates a trackRotation', async (scenario: StandardScenario) => {
    const result = await createTrackRotation({
      input: {
        name: 'String',
        block: 9009022,
        trackId: scenario.trackRotation.two.trackId,
        rotationId: scenario.trackRotation.two.rotationId,
        updatedAt: '2023-02-20T22:49:13.454Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.block).toEqual(9009022)
    expect(result.trackId).toEqual(scenario.trackRotation.two.trackId)
    expect(result.rotationId).toEqual(scenario.trackRotation.two.rotationId)
    expect(result.updatedAt).toEqual(new Date('2023-02-20T22:49:13.454Z'))
  })

  scenario('updates a trackRotation', async (scenario: StandardScenario) => {
    const original = (await trackRotation({
      id: scenario.trackRotation.one.id,
    })) as TrackRotation
    const result = await updateTrackRotation({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a trackRotation', async (scenario: StandardScenario) => {
    const original = (await deleteTrackRotation({
      id: scenario.trackRotation.one.id,
    })) as TrackRotation
    const result = await trackRotation({ id: original.id })

    expect(result).toEqual(null)
  })
})
