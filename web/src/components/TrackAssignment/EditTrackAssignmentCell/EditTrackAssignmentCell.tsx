import type { EditTrackAssignmentById, UpdateTrackAssignmentInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TrackAssignmentForm from 'src/components/TrackAssignment/TrackAssignmentForm'

export const QUERY = gql`
  query EditTrackAssignmentById($id: Int!) {
    trackAssignment: trackAssignment(id: $id) {
      id
      scheduleId
      residentId
      trackId
      createdAt
      deletedAt
    }
  }
`
const UPDATE_TRACK_ASSIGNMENT_MUTATION = gql`
  mutation UpdateTrackAssignmentMutation($id: Int!, $input: UpdateTrackAssignmentInput!) {
    updateTrackAssignment(id: $id, input: $input) {
      id
      scheduleId
      residentId
      trackId
      createdAt
      deletedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ trackAssignment }: CellSuccessProps<EditTrackAssignmentById>) => {
  const [updateTrackAssignment, { loading, error }] = useMutation(
    UPDATE_TRACK_ASSIGNMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('TrackAssignment updated')
        navigate(routes.trackAssignments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateTrackAssignmentInput,
    id: EditTrackAssignmentById['trackAssignment']['id']
  ) => {
    updateTrackAssignment({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit TrackAssignment {trackAssignment?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TrackAssignmentForm trackAssignment={trackAssignment} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
