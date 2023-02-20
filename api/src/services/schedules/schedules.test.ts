import type { Schedule } from '@prisma/client'

import {
  schedules,
  schedule,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} from './schedules'
import type { StandardScenario } from './schedules.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('schedules', () => {
  scenario('returns all schedules', async (scenario: StandardScenario) => {
    const result = await schedules()

    expect(result.length).toEqual(Object.keys(scenario.schedule).length)
  })

  scenario('returns a single schedule', async (scenario: StandardScenario) => {
    const result = await schedule({ id: scenario.schedule.one.id })

    expect(result).toEqual(scenario.schedule.one)
  })

  scenario('creates a schedule', async () => {
    const result = await createSchedule({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a schedule', async (scenario: StandardScenario) => {
    const original = (await schedule({
      id: scenario.schedule.one.id,
    })) as Schedule
    const result = await updateSchedule({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a schedule', async (scenario: StandardScenario) => {
    const original = (await deleteSchedule({
      id: scenario.schedule.one.id,
    })) as Schedule
    const result = await schedule({ id: original.id })

    expect(result).toEqual(null)
  })
})
