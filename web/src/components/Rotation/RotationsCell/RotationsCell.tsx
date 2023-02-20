import type { FindRotations } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Rotations from 'src/components/Rotation/Rotations'

export const QUERY = gql`
  query FindRotations {
    rotations {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No rotations yet. '}
      <Link
        to={routes.newRotation()}
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

export const Success = ({ rotations }: CellSuccessProps<FindRotations>) => {
  return <Rotations rotations={rotations} />
}
