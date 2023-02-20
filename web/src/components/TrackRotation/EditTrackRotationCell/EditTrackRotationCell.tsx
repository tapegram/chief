import type { EditTrackRotationById, UpdateTrackRotationInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TrackRotationForm from 'src/components/TrackRotation/TrackRotationForm'

export const QUERY = gql`
  query EditTrackRotationById($id: Int!) {
    trackRotation: trackRotation(id: $id) {
      id
      name
      block
      trackId
      rotationId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_TRACK_ROTATION_MUTATION = gql`
  mutation UpdateTrackRotationMutation($id: Int!, $input: UpdateTrackRotationInput!) {
    updateTrackRotation(id: $id, input: $input) {
      id
      name
      block
      trackId
      rotationId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ trackRotation }: CellSuccessProps<EditTrackRotationById>) => {
  const [updateTrackRotation, { loading, error }] = useMutation(
    UPDATE_TRACK_ROTATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('TrackRotation updated')
        navigate(routes.trackRotations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateTrackRotationInput,
    id: EditTrackRotationById['trackRotation']['id']
  ) => {
    updateTrackRotation({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit TrackRotation {trackRotation?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TrackRotationForm trackRotation={trackRotation} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
