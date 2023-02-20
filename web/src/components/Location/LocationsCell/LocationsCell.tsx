import type { FindLocations } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Locations from 'src/components/Location/Locations'

export const QUERY = gql`
  query FindLocations {
    locations {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No locations yet. '}
      <Link
        to={routes.newLocation()}
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

export const Success = ({ locations }: CellSuccessProps<FindLocations>) => {
  return <Locations locations={locations} />
}
