import type { FindTrackRotations } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TrackRotations from 'src/components/TrackRotation/TrackRotations'

export const QUERY = gql`
  query FindTrackRotations {
    trackRotations {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No trackRotations yet. '}
      <Link
        to={routes.newTrackRotation()}
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

export const Success = ({ trackRotations }: CellSuccessProps<FindTrackRotations>) => {
  return <TrackRotations trackRotations={trackRotations} />
}
