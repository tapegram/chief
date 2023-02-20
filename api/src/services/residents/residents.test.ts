import type { Resident } from '@prisma/client'

import {
  residents,
  resident,
  createResident,
  updateResident,
  deleteResident,
} from './residents'
import type { StandardScenario } from './residents.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('residents', () => {
  scenario('returns all residents', async (scenario: StandardScenario) => {
    const result = await residents()

    expect(result.length).toEqual(Object.keys(scenario.resident).length)
  })

  scenario('returns a single resident', async (scenario: StandardScenario) => {
    const result = await resident({ id: scenario.resident.one.id })

    expect(result).toEqual(scenario.resident.one)
  })

  scenario('creates a resident', async () => {
    const result = await createResident({
      input: { name: 'String', email: 'String707728', year: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.email).toEqual('String707728')
    expect(result.year).toEqual('String')
  })

  scenario('updates a resident', async (scenario: StandardScenario) => {
    const original = (await resident({
      id: scenario.resident.one.id,
    })) as Resident
    const result = await updateResident({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a resident', async (scenario: StandardScenario) => {
    const original = (await deleteResident({
      id: scenario.resident.one.id,
    })) as Resident
    const result = await resident({ id: original.id })

    expect(result).toEqual(null)
  })
})
