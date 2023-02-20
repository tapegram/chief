import type { EditTrackById, UpdateTrackInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TrackForm from 'src/components/Track/TrackForm'

export const QUERY = gql`
  query EditTrackById($id: Int!) {
    track: track(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`
const UPDATE_TRACK_MUTATION = gql`
  mutation UpdateTrackMutation($id: Int!, $input: UpdateTrackInput!) {
    updateTrack(id: $id, input: $input) {
      id
      name
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ track }: CellSuccessProps<EditTrackById>) => {
  const [updateTrack, { loading, error }] = useMutation(
    UPDATE_TRACK_MUTATION,
    {
      onCompleted: () => {
        toast.success('Track updated')
        navigate(routes.tracks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateTrackInput,
    id: EditTrackById['track']['id']
  ) => {
    updateTrack({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Track {track?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TrackForm track={track} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
