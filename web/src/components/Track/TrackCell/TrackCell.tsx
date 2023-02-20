import type { FindTrackById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Track from 'src/components/Track/Track'

export const QUERY = gql`
  query FindTrackById($id: Int!) {
    track: track(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Track not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ track }: CellSuccessProps<FindTrackById>) => {
  return <Track track={track} />
}
