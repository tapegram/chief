import type { EditRotationById, UpdateRotationInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RotationForm from 'src/components/Rotation/RotationForm'

export const QUERY = gql`
  query EditRotationById($id: Int!) {
    rotation: rotation(id: $id) {
      id
      name
      length
      locationId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_ROTATION_MUTATION = gql`
  mutation UpdateRotationMutation($id: Int!, $input: UpdateRotationInput!) {
    updateRotation(id: $id, input: $input) {
      id
      name
      length
      locationId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ rotation }: CellSuccessProps<EditRotationById>) => {
  const [updateRotation, { loading, error }] = useMutation(
    UPDATE_ROTATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Rotation updated')
        navigate(routes.rotations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateRotationInput,
    id: EditRotationById['rotation']['id']
  ) => {
    updateRotation({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Rotation {rotation?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <RotationForm rotation={rotation} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
