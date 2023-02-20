import type { FindTrackRotationById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TrackRotation from 'src/components/TrackRotation/TrackRotation'

export const QUERY = gql`
  query FindTrackRotationById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>TrackRotation not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ trackRotation }: CellSuccessProps<FindTrackRotationById>) => {
  return <TrackRotation trackRotation={trackRotation} />
}
