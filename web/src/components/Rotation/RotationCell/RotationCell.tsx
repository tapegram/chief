import type { FindRotationById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Rotation from 'src/components/Rotation/Rotation'

export const QUERY = gql`
  query FindRotationById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Rotation not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ rotation }: CellSuccessProps<FindRotationById>) => {
  return <Rotation rotation={rotation} />
}
