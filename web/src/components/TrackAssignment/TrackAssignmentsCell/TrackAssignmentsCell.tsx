import type { FindTrackAssignments } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TrackAssignments from 'src/components/TrackAssignment/TrackAssignments'

export const QUERY = gql`
  query FindTrackAssignments {
    trackAssignments {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No trackAssignments yet. '}
      <Link
        to={routes.newTrackAssignment()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ trackAssignments }: CellSuccessProps<FindTrackAssignments>) => {
  return <TrackAssignments trackAssignments={trackAssignments} />
}
