import type { Track } from '@prisma/client'

import { tracks, track, createTrack, updateTrack, deleteTrack } from './tracks'
import type { StandardScenario } from './tracks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tracks', () => {
  scenario('returns all tracks', async (scenario: StandardScenario) => {
    const result = await tracks()

    expect(result.length).toEqual(Object.keys(scenario.track).length)
  })

  scenario('returns a single track', async (scenario: StandardScenario) => {
    const result = await track({ id: scenario.track.one.id })

    expect(result).toEqual(scenario.track.one)
  })

  scenario('creates a track', async () => {
    const result = await createTrack({
      input: { name: 'String', updatedAt: '2023-02-20T22:49:05.526Z' },
    })

    expect(result.name).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-02-20T22:49:05.526Z'))
  })

  scenario('updates a track', async (scenario: StandardScenario) => {
    const original = (await track({ id: scenario.track.one.id })) as Track
    const result = await updateTrack({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a track', async (scenario: StandardScenario) => {
    const original = (await deleteTrack({ id: scenario.track.one.id })) as Track
    const result = await track({ id: original.id })

    expect(result).toEqual(null)
  })
})
