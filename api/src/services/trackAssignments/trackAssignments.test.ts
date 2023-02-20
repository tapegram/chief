import type { TrackAssignment } from '@prisma/client'

import {
  trackAssignments,
  trackAssignment,
  createTrackAssignment,
  updateTrackAssignment,
  deleteTrackAssignment,
} from './trackAssignments'
import type { StandardScenario } from './trackAssignments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('trackAssignments', () => {
  scenario(
    'returns all trackAssignments',
    async (scenario: StandardScenario) => {
      const result = await trackAssignments()

      expect(result.length).toEqual(
        Object.keys(scenario.trackAssignment).length
      )
    }
  )

  scenario(
    'returns a single trackAssignment',
    async (scenario: StandardScenario) => {
      const result = await trackAssignment({
        id: scenario.trackAssignment.one.id,
      })

      expect(result).toEqual(scenario.trackAssignment.one)
    }
  )

  scenario('creates a trackAssignment', async (scenario: StandardScenario) => {
    const result = await createTrackAssignment({
      input: {
        scheduleId: scenario.trackAssignment.two.scheduleId,
        residentId: scenario.trackAssignment.two.residentId,
        trackId: scenario.trackAssignment.two.trackId,
      },
    })

    expect(result.scheduleId).toEqual(scenario.trackAssignment.two.scheduleId)
    expect(result.residentId).toEqual(scenario.trackAssignment.two.residentId)
    expect(result.trackId).toEqual(scenario.trackAssignment.two.trackId)
  })

  scenario('updates a trackAssignment', async (scenario: StandardScenario) => {
    const original = (await trackAssignment({
      id: scenario.trackAssignment.one.id,
    })) as TrackAssignment
    const result = await updateTrackAssignment({
      id: original.id,
      input: { scheduleId: scenario.trackAssignment.two.scheduleId },
    })

    expect(result.scheduleId).toEqual(scenario.trackAssignment.two.scheduleId)
  })

  scenario('deletes a trackAssignment', async (scenario: StandardScenario) => {
    const original = (await deleteTrackAssignment({
      id: scenario.trackAssignment.one.id,
    })) as TrackAssignment
    const result = await trackAssignment({ id: original.id })

    expect(result).toEqual(null)
  })
})
