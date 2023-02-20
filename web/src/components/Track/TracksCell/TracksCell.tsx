import type { FindTracks } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Tracks from 'src/components/Track/Tracks'

export const QUERY = gql`
  query FindTracks {
    tracks {
      id
      name
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tracks yet. '}
      <Link
        to={routes.newTrack()}
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

export const Success = ({ tracks }: CellSuccessProps<FindTracks>) => {
  return <Tracks tracks={tracks} />
}
