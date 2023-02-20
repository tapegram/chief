import type { Rotation } from '@prisma/client'

import {
  rotations,
  rotation,
  createRotation,
  updateRotation,
  deleteRotation,
} from './rotations'
import type { StandardScenario } from './rotations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('rotations', () => {
  scenario('returns all rotations', async (scenario: StandardScenario) => {
    const result = await rotations()

    expect(result.length).toEqual(Object.keys(scenario.rotation).length)
  })

  scenario('returns a single rotation', async (scenario: StandardScenario) => {
    const result = await rotation({ id: scenario.rotation.one.id })

    expect(result).toEqual(scenario.rotation.one)
  })

  scenario('creates a rotation', async (scenario: StandardScenario) => {
    const result = await createRotation({
      input: {
        name: 'String',
        length: 2538722,
        locationId: scenario.rotation.two.locationId,
        updatedAt: '2023-02-20T22:49:35.835Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.length).toEqual(2538722)
    expect(result.locationId).toEqual(scenario.rotation.two.locationId)
    expect(result.updatedAt).toEqual(new Date('2023-02-20T22:49:35.835Z'))
  })

  scenario('updates a rotation', async (scenario: StandardScenario) => {
    const original = (await rotation({
      id: scenario.rotation.one.id,
    })) as Rotation
    const result = await updateRotation({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a rotation', async (scenario: StandardScenario) => {
    const original = (await deleteRotation({
      id: scenario.rotation.one.id,
    })) as Rotation
    const result = await rotation({ id: original.id })

    expect(result).toEqual(null)
  })
})
