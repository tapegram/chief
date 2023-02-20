import type { FindTrackAssignmentById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TrackAssignment from 'src/components/TrackAssignment/TrackAssignment'

export const QUERY = gql`
  query FindTrackAssignmentById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>TrackAssignment not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ trackAssignment }: CellSuccessProps<FindTrackAssignmentById>) => {
  return <TrackAssignment trackAssignment={trackAssignment} />
}
